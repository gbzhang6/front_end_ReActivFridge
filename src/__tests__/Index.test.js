import axios from 'axios';
import React from 'react';
import { shallow } from 'enzyme';
import Index from '../containers/Index.js';

jest.mock('axios');
//state loads and selectedIngredients is empty

describe('Index State on load', () => {

  test('Checking state when application is loaded', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.state('selectedIngredients')).toHaveLength(0);
    expect(wrapper.state('ingredients')).toHaveLength(0);
  });

});
