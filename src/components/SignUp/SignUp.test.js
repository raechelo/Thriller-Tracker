import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from './SignUp';

describe('SignUp', () => {

  let wrapper;

  it('should match the snapshot with all the data passed in', () => {
    wrapper = shallow( <SignUp /> )
    expect(wrapper).toMatchSnapshot()
  })
})