import React from 'react';
import { shallow } from 'enzyme';
import { Favorites } from './Favorites';

describe('Favorites', () => {

  let wrapper;
  let favorited = [{title: 'Isle of Dogs', favorite: true}]

  beforeEach(() => {
    wrapper = shallow( <Favorites movies={favorited} /> )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })
})