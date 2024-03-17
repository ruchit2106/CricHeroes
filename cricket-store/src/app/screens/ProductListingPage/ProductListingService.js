import URLS from "../../global/StringConstants";

const getProductsData = async () => {
  const response = await fetch(URLS.API_URL);
  const data = await response.json();
  console.log(data);
  return data;
};
export default getProductsData;
