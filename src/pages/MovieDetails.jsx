import { Movie } from 'components/Movie/Movie';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'service/fetchMovies';
import { FaArrowLeft } from 'react-icons/fa';

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
      <Link
        to={backLink.current}
        style={{
          padding: 10,
          marginBottom: 12,
          fontSize: 20,
          fontWeight: 500,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
        }}
      >
        <FaArrowLeft />
        Go back
      </Link>
      <Movie movie={movie} />
      <Link
        style={{
          padding: 10,

          fontSize: 20,
          fontWeight: 500,

          cursor: 'pointer',
        }}
        to="cast"
      >
        Cast
      </Link>
      <Link
        style={{
          padding: 10,

          fontSize: 20,
          fontWeight: 500,

          cursor: 'pointer',
        }}
        to="reviews"
      >
        Reviews
      </Link>
      <Suspense key={location.pathname} fallback={<div>LOADING!!!</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
