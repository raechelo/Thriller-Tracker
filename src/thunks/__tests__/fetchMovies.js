import { fetchMovies } from '../fetchMovies';
import { fetchData } from '../../utils/api/fetchData';
import { cleanMovies } from '../../utils/api/cleanMovies';
import { isLoading, hasErrored, setMovies } from '../../actions';
import { exportAllDeclaration } from '@babel/types';

describe('fetchMovies', () => {

  let mockUrl
  let mockMovies
  let mockDispatch
  let thunk

  beforeEach(() => {
    mockUrl = 'someurl.com';
    mockMovies = [{title: 'How To Train Your Dragon', info: 'cute dragons'}, {title: 'How To Train Your Dragons 2', info: 'cuter dragons'}]

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

  it('should dispatch fetchData with correct params if the response is okay', () => {

  });

  it('should dispatch isLoading if the response is okay', () => {

  });

  it('should dispatch setMovies with the correct params if repsonse is okay', () => {

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