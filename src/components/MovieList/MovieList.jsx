import { Link, useLocation } from 'react-router-dom';
import { Item, List, Title } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  const linkToMovieDetails = location.pathname === '/' ? 'movies' : '/movies';
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <Link
            to={`${linkToMovieDetails}/${movie.id}`}
            state={{ from: location }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie poster"
              width={300}
              height={450}
            />
            <Title>{movie.title}</Title>
          </Link>
        </Item>
      ))}
    </List>
  );
};
