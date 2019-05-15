import { fetchData } from '../utils/api/fetchData';
import { setFavoritesOnLogIn } from '../actions';

export const fetchFavorites = (user_id) => {
  return async (dispatch) => {
    const url = `http://localhost:3000/api/users/${user_id}/favorites`;
    const result = await fetchData(url);
    dispatch(setFavoritesOnLogIn(result.data))
  }
}