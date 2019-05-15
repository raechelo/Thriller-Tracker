import { loginUser } from '../loginUser';
import { fetchData } from '../../utils/api/fetchData';
import { logInUser } from '../../actions';

describe('loginUser', () => {

  let mockDispatch
  let mockUrl
  let thunk
  let mockUser

  beforeEach(() => {
    mockUrl = 'someurl.com';
    mockDispatch = jest.fn();
    mockUser = {name: 'Blackbeard', email: 'piratecaptain@queenannesrevenge.com'}
    thunk = fetchData(mockUrl)
  });

  it.skip('should call dispatch to log in a user', () => {
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(mockUrl)
  });

  it('should return a user', () => {
    thunk(mockDispatch)
    expect(mockDispatch).toEqual(mockUser)
  })

});