import React from 'react';
import { shallow } from 'enzyme';

describe('SignUp', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <SignUp /> )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})