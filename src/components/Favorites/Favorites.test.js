import React from 'react';
import { shallow } from 'enzyme';

describe('Favorites', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Favorites /> )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})