import tmdbApi from './themoviedb-api';

export async function fetchMovies() {
  const { data } = await tmdbApi.get('/trending/movie/day', {
    params: {
      language: 'en-US',
    },
  });
  return data;
}

export async function fetchMovieBySearchQuery(query) {
  const { data } = await tmdbApi.get(`/search/movie?query=${query}`, {
    params: {
      language: 'en-US',
    },
  });
  return data;
}

export async function fetchMovieDetails(id) {
  const { data } = await tmdbApi.get(`movie/${id}`, {
    params: {
      language: 'en-US',
    },
  });
  return data;
}

export async function fetchMovieCast(id) {
  const { data } = await tmdbApi.get(`movie/${id}/credits`, {
    params: {
      language: 'en-US',
    },
  });
  return data.cast;
}

export async function fetchMovieReviews(id) {
  const { data } = await tmdbApi.get(`movie/${id}/reviews`, {
    params: {
      language: 'en-US',
    },
  });
  return data.results;
}
