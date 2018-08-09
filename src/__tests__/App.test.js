import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

//app renders without crashing and displays header

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Welcome to reActivFridge</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

// const foo = () => {}
//
// <Button foo={asohdu} />
//
// class Button {
// render() {
//   <div onClick={this.props.foo1}>
//   </div>
// }
// }
//
// Button.click()
//
// const findRecipes = (arg1, arg2) => {}
