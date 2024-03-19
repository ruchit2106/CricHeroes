import URLS from "@/global/StringConstants";

export const getProductsData = async () => {
  const response = await fetch(URLS.FETCH_ALL_PRODUCTS);
  const data = await response.json();
  // console.log(data);
  return data;
};

export const getProductDataById = async (productId) => {
  console.log(productId);
  const response = await fetch(URLS.FETCH_PRODUCT_BY_ID + "/" + productId);
  const data = await response.json();
  console.log(data);
  return data;
};
