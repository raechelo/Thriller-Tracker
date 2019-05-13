import { user } from './userReducer';
import * as actions from '../actions';

describe('user', () => {

  it('should return default state', () => {
    const expected = {};

    const result = user(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return no user upon user logout', () => {
    const result = user(undefined, actions.logOutUser());
    expect(result).toEqual({})
  });

  it('should return a user upon uesr login', () => {
    const expected = { name: 'Heracles', email: 'twelvetimeslaborer@olympus.com', password: 'goldenfleece' }

    const result = user(undefined, actions.logInUser(expected));
    expect(result).toEqual(expected)
  });
});