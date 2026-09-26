import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  const linkToMovieDetails = location.pathname === '/' ? 'movies' : '/movies';
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${linkToMovieDetails}/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie poster"
              width={300}
            />
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
