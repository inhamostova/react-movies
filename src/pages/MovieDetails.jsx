import { Movie } from 'components/Movie/Movie';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'service/fetchMovies';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovieDetails(id) {
      const result = await fetchMovieDetails(id);
      setMovie(result);
    }

    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <div>
      <Movie movie={movie} />
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
