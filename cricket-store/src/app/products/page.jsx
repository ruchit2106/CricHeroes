import URLS from "@/lib/StringConstants";
import ProductItems from "@/containers/products-page/products-section";

const getProductsData = async () => {
  const response = await fetch(URLS.FETCH_ALL_PRODUCTS);
  const data = await response.json();
  return data;
};

const Products = async () => {
  "use server";
  const data = await getProductsData();
  
  return <ProductItems props={data} />;
};
export default Products;
