import { userReducer } from './userReducer';
import * as actions from '../actions';

describe('userReducer', () => {

  it('should return default state', () => {
    const expected = {};

    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return no user upon user logout', () => {
    const result = userReducer(undefined, actions.logOutUser());
    expect(result).toEqual({})
  });

  it('should return a user upon uesr login', () => {
    const user = { name: 'Heracles', email: 'twelvetimeslaborer@olympus.com', password: 'goldenfleece' }

    const result = userReducer(undefined, actions.logInUser(user));
    expect(result).toEqual(user)
  });
});