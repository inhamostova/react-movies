import { Title, Wrapper } from './Movie.styled';

export const Movie = ({
  movie: { poster_path, title, genres = [], overview, vote_average },
}) => {
  return (
    <Wrapper>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="poster"
        width={300}
      />
      <div>
        <h2>{title}</h2>
        <p>Average vote: {vote_average}</p>
        <Title>Genres</Title>
        <p>{genres.map(({ name }) => name).join(', ')}</p>
        <Title>Overview</Title>
        <p>{overview}</p>
      </div>
    </Wrapper>
  );
};
