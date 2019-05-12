import { fetchMovies } from '../fetchMovies';

jest.mock('../fetchData');

describe('fetchMovies', () => {

  let mockFetchData = jest.fn();
  let mockCleanMovies = jest.fn();

  it.skip('should fetch movies', async () => {
    let mockUrl = 'www.someurl.com';
    await fetchMovies();

    expect(fetchData).toHaveBeenCalledWith(mockUrl);
  });

  it.skip('should call cleanMovies', () => {
    fetchMovies();
    expect(mockCleanMovies).toHaveBeenCalled();
  })
});