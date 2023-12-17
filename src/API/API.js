import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '9625b3bcc23dbc112b250ff0a8900df4';

const commonOptions = {
  method: 'GET',
  baseURL,
  headers: {
    accept: 'application/json',
  },
  params: {
    api_key: `${apiKey}`,
  },
};

const getTrendingMovies = async () => {
  const options = {
    ...commonOptions,
    url: 'trending/movie/day',
  };
  const { data } = await axios(options);
  return data.results;
};

async function getMovieByQuery(query) {
  const options = {
    ...commonOptions,
    url: 'search/movie',
    params: {
      query,
      api_key: `${apiKey}`,
    },
  };
  const { data } = await axios(options);
  return data.results;
}

async function getMovieDetails(movieId) {
  const options = {
    ...commonOptions,
    url: `movie/${movieId}`,
  };
  const { data } = await axios(options);
  return data;
}

async function getMovieCredits(movieId) {
  const options = {
    ...commonOptions,
    url: `movie/${movieId}/credits`,
  };
  const { data } = await axios(options);
  return data.cast;
}

async function getMovieReviews(movieId) {
  const options = {
    ...commonOptions,
    url: `movie/${movieId}/reviews`,
  };
  const { data } = await axios(options);
  return data.results;
}

export {
  getTrendingMovies,
  getMovieByQuery,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
