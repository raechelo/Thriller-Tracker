import { fetchData } from '../utils/api/fetchData';
import { logInUser } from '../actions';

export const createNewUser = (user) => {
  return async (dispatch) => {
    try {
      const {name, email, password} = user;
      user = {name, email, password}
      const url = 'http://localhost:3000/api/users/new'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      }
      const result = await fetchData(url, options);
      dispatch(logInUser({...user, id: result.id}));
      return result;
    } catch (error) {
      console.log('error', error);
    }
  }
}