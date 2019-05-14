import { fetchData } from '../fetchData';

describe('fetchData', () => {

  let mockUrl;
  let mockMovies;

  beforeEach(() => {
    mockUrl = 'www.placeholder.com';
    mockMovies = [{title: 'Blade Runner'}, {title: 'Jurassic Park'}];
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovies)
      })
      
    })
  })

  it('should call fetch with the correct params', async () => {
    fetchData(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined)
  });

  it.skip('should return a parsed response if status is okay', async () => {
    let result = fetchData(mockUrl, undefined);

    expect(result).toEqual(mockMovies);
  });

  it('should return an error if the fetch fails', async () =>{
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    await expect(fetchData()).rejects.toEqual(Error())
  })
});