import key from '../utils/apikey';
import fetchData from './fetchData';
import cleanMovies from './cleanMovies';

const fetchMovies = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=14`
  // const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&page=${1}`;
  const parsedResponse = await fetchData(url);
  return cleanMovies(parsedResponse.results);
}

export default fetchMovies;