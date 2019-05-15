import { deleteFavorite } from '../deleteFavorite';
import { fetchData } from '../../utils/api/fetchData';

describe('loginUser', () => {

  let mockDispatch
  let mockUrl
  let thunk

  beforeEach(() => {
    mockUrl = 'someurl.com';
    mockDispatch = jest.fn();
    thunk = fetchData(mockUrl)
  });

  it.skip('should delete favorites from a users chosen movies', () => {
  })

});