import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from './SignUp';

describe('SignUp', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <SignUp /> )
  })

  it('should match the snapshot with all the data passed in', () => {

    expect(wrapper).toMatchSnapshot()
  });

  it('should handle change', () => {
    wrapper.setState({ email: '', password: ''})
    const e = { target: { name: 'email', value: 'godofolympus@gmail.com' } }

    wrapper.instance().handleChange(e);
    expect(wrapper.state('email')).toEqual('godofolympus@gmail.com')
  });


})