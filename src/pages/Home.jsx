import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'service/fetchMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      const { results } = await fetchMovies();
      setMovies(results);
    }
    getTrendingMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
