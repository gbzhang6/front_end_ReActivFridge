import axios from 'axios';

class Ingredients {
  static all() {
    return axios.get('http://localhost:3000/api/v1/ingredients').then(resp => resp.data);
  }
}

export default Ingredients;
