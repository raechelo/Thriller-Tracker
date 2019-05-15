import React from 'react';
import { shallow } from 'enzyme';
import CardDetails from './CardDetails';

describe('CardDetails', () => {
  
  let wrapper;
  
  let movie = { title: 'Return of the King', vote_average: 8.9, release_date: "2003-05-10", overview: 'The rightful king retakes the throne of Men and Gondor.'}

  beforeEach(() => {
    wrapper = shallow(<CardDetails {...movie} />)
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();

    movie.favorited = true;
    expect(wrapper).toMatchSnapshot();
  });
})