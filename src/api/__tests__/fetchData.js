import { fetchData } from '../fetchData';

describe('fetchData', () => {

  let mockUrl;

  beforeEach(() => {
    mockUrl = 'www.placeholder.com';
    let mockMovies = [{title: 'Blade Runner'}, {title: 'Jurassic Park'}]
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          movies: mockMovies
        })
      })
    })
  })

  it('should call fetch with the correct params', async () => {

    fetchData(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined)
  });

  it('should return a parsed response if status is okay', () => {

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