import { MovieList } from 'components/MovieList/MovieList';
import { SearchMovie } from 'components/SerchMovie/SerchMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieBySearchQuery } from 'service/fetchMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useSearchParams();

  const query = searchQuery.get('query') ?? '';

  useEffect(() => {
    async function getMoviesBySearch(movieName) {
      try {
        setError(null);
        setMovies([]);
        if (query === '') return;
        const { results } = await fetchMovieBySearchQuery(movieName);
        if (results.length === 0) {
          throw new Error('Enter correct movie title!');
        }
        setMovies(results);
      } catch (error) {
        setError(error.message);
      }
    }
    getMoviesBySearch(query);
  }, [query]);

  const onSubmit = value => {
    setSearchQuery(value !== '' ? { query: value } : {});
  };

  return (
    <>
      <SearchMovie onSubmit={onSubmit} />
      {error ? (
        <p style={{ color: 'orangered' }}>{error}</p>
      ) : (
        <MovieList movies={movies} />
      )}
      {/* <MovieList movies={movies} /> */}
    </>
  );
};

export default Movies;
