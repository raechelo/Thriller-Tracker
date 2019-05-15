import { addFavorite } from '../addFavorite';
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

  it.skip('should add a movie to a user\'s chosen favorites', () => {
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(mockUrl)
  })

});