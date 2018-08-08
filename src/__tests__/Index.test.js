import axios from 'axios';
import React from 'react';
import { shallow } from 'enzyme';
import Index from '../containers/Index.js';
import Ingredients from '../__mocks__/request.js';

jest.mock('axios');
//state loads and selectedIngredients is empty

describe('Index State on load', () => {

  test('State = false on default ', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.state('selectedIngredients')).toHaveLength(0);
  });

  test('should fetch ingredients', async() => {
    const wrapper = mount(
         <Index />
      );
      await wrapper.instance().componentDidMount();

    const resp = {data: [{name: "Beef"}]};
    fetch.mockResponse(JSON.stringify(resp))

    expect(fetch.mock.calls.length).toEqual(2);
    expect(wrapper.state('ingredients')).toContain(resp.data);

    // return Ingredients.all().then(ingredients => expect(ingredients).toContain(resp.data));
  });

});
