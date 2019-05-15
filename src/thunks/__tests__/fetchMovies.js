import { fetchMovies } from '../fetchMovies';
import { fetchData } from '../../utils/api/fetchData';
import { cleanMovies } from '../../utils/api/cleanMovies';
import { isLoading, hasErrored, setMovies } from '../../actions';
import { exportAllDeclaration } from '@babel/types';

jest.mock('../../utils/api/cleanMovies')

describe('fetchMovies', () => {

  let mockUrl
  let mockMovies
  let mockCleanMovies
  let mockDispatch
  let thunk

  beforeEach(() => {
    mockUrl = 'someurl.com';
    mockMovies = [{title: 'How To Train Your Dragon', info: 'cute dragons'}, {title: 'How To Train Your Dragons 2', info: 'cuter dragons'}]
    mockCleanMovies = jest.fn()
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          data: mockMovies
        })
      })
    })
    thunk = fetchMovies(mockUrl)
  })

  it('should call dispatch isLoading(true', () => {
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('fetch gets called with the correct params', () => {
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined);
  });

  it.skip('should clean movies with correct params if the response is okay', async () => {
    await thunk(mockDispatch)
    expect(mockCleanMovies).toHaveBeenCalledWith(...mockMovies)
  });

  it.skip('should dispatch isLoading(false) if the response is okay', async () => {
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it.skip('should dispatch setMovies with the correct params if repsonse is okay', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setMovies(mockMovies));
  });

  it('should dispatch hasErrored if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'something went wrong'
      })
    })
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('something went wrong'))
  })
});