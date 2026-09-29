import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'service/fetchMovies';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getMovieReviews(id) {
      const resp = await fetchMovieReviews(id);
      setReviews(resp);
    }
    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {!reviews.length ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {' '}
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
