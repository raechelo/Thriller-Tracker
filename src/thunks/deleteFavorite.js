import { fetchData } from '../api/fetchData';

export const deleteFavorite = (movie_id, user_id) => {
  return async (dispatch) => {
    const url = `http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        movie_id,
        user_id,
      })
    }
    await fetchData(url, options);
  }
}