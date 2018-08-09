// test your api function is called
import axios from 'axios';
import getIngredients from '../services/getIngredients';

jest.mock('axios');

describe('getIngredients', () => {

  // test('Does mock axios work', () => {
  //   const resp = {
  //     data: [
  //       {
  //         name: 'Beef'
  //       }
  //     ]
  //   };
  //   axios.get.mockImplementation(() => Promise.resolve(resp))
  //
  //   return getIngredients().then(ingredients => expect(ingredients).toEqual(resp.data));
  // });

  test('The right URL is called when the fetch happens', () => {
    getIngredients();
    expect(axios.get).toBeCalledWith("http://localhost:3000/api/v1/ingredients");
  });

});
