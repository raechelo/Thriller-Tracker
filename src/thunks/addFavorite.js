import { fetchData } from '../utils/api/fetchData';

export const addFavorite = (movie, user_id) => {
  return async (dispatch) => {
    const {id, title, posterImage, release_date, vote_average, overview} = movie;
    const url = 'http://localhost:3000/api/users/favorites/new'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        movie_id: id,
        user_id,
        title,
        poster_path: posterImage, 
        release_date,
        vote_average,
        overview
      })
    }
    await fetchData(url, options);
  }
}