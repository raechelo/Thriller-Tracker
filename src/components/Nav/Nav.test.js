import React from 'react';
import { shallow } from 'enzyme';

describe('Nav', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Nav /> )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})