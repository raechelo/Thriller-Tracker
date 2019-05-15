import { fetchData } from '../utils/api/fetchData';

import { logInUser } from '../actions';

export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const {email, password} = user;
      const url = 'http://localhost:3000/api/users'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }
      const result = await fetchData(url, options);
      dispatch(logInUser(result.data))
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}