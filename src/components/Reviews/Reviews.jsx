import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'service/fetchMovies';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovieReviews(id) {
      try {
        setError(null);
        const resp = await fetchMovieReviews(id);
        if (resp.length === 0) {
          throw new Error("We don't have any reviews for this movie.");
        }
        setReviews(resp);
      } catch (error) {
        setError(error.message);
      }
    }
    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              {review.author} - {review.content}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
