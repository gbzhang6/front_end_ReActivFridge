import axios from "axios";

async function getIngredients() {
  const response = await axios.get("http://localhost:3000/api/v1/ingredients")
  return response.data;
};

export default getIngredients;
