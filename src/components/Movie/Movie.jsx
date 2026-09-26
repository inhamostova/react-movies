export const Movie = ({
  movie: { poster_path, title, genres = [], overview, vote_average },
}) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="poster"
        width={300}
      />
      <h2>{title}</h2>
      <p>{vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(({ name }) => name).join(', ')}</p>
    </div>
  );
};
