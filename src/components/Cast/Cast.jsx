import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'service/fetchMovies';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getMovieCast(id) {
      const resp = await fetchMovieCast(id);
      setCast(resp);
    }
    getMovieCast(movieId);
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </ul>
  );
};

export default Cast;
