import axios from 'axios';

const KEY = 'c78419a450ee7857724cd10a5beb7b65';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const imgUrl = 'https://image.tmdb.org/t/p/original';

export async function fetchTrendMovies() {
  const response = await axios('/trending/all/day', {
    params: {
      api_key: KEY,
      page: 1,
    },
  });

  return response;
}

export async function fetchMovieDetails(id) {
  const response = await axios(`/movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });

  return response;
}

export async function fetchMovieDetailsCast(id) {
  const response = await axios(`/movie/${id}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return response;
}

export async function fetchMovieDetailsReview(id) {
  const response = await axios(`/movie/${id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });

  return response;
}

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: KEY,
  },
});

export const fetchSearchMovie = async (query, page = 1) => {
  const { data } = await instance.get('search/movie', {
    params: {
      query,
      page,
    },
  });
  return data;
};
