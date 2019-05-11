import { moviesReducer } from './moviesReducer';
import * as actions from '../actions';

describe('moviesReducer', () => {

  it('should return the inital state', () => {
    const expected = [];

    const result = moviesReducer(undefined, []);
    expect(result).toEqual(expected);
  });


});