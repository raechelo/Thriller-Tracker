import { loginUser } from '../loginUser';
import { fetchData } from '../../utils/api/fetchData';
import { logInUser } from '../../actions';

describe('loginUser', () => {

  let mockDispatch
  let mockUrl
  let thunk

  beforeEach(() => {
    mockUrl = 'someurl.com';
    mockDispatch = jest.fn();
    thunk = fetchData(mockUrl)
  });

  it.skip('should call dispatch to log in a user', () => {
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(mockUrl)
  })

});