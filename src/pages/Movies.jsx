import { MovieList } from 'components/MovieList/MovieList';
import { SearchMovie } from 'components/SerchMovie/SerchMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieBySearchQuery } from 'service/fetchMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();

  const query = searchQuery.get('query') ?? '';

  useEffect(() => {
    async function getMoviesBySearch(movieName) {
      const { results } = await fetchMovieBySearchQuery(movieName);
      setMovies(results);
    }
    getMoviesBySearch(query);
  }, [query]);

  const onSubmit = value => {
    setSearchQuery(value !== '' ? { query: value } : {});
  };

  return (
    <>
      <SearchMovie onSubmit={onSubmit} />
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
