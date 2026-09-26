import { MovieList } from 'components/MovieList/MovieList';
import { SearchMovie } from 'components/SerchMovie/SerchMovie';
import { useEffect, useState } from 'react';
import { fetchMovieBySearchQuery } from 'service/fetchMovies';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMoviesBySearch(movieName) {
      const { results } = await fetchMovieBySearchQuery(movieName);
      setMovies(results);
    }
    getMoviesBySearch(query);
  }, [query]);

  const onSubmit = value => {
    setQuery(value);
  };

  return (
    <>
      <SearchMovie onSubmit={onSubmit} />
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
