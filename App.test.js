import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Welcome to reActivFridge</h1>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
