import { Movie } from 'components/Movie/Movie';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'service/fetchMovies';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getMovieDetails(id) {
      const result = await fetchMovieDetails(id);
      setMovie(result);
    }

    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <div>
      <Link to={backLink.current}>Go back</Link>
      <Movie movie={movie} />
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
