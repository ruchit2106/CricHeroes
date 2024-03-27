import URLS from "@/lib/StringConstants";
import ProductItem from "@/containers/product-page/product-section";

const getProductDataById = async (productId) => {
  const response = await fetch(URLS.FETCH_PRODUCT_BY_ID + "/" + productId);
  const data = await response.json();
  return data;
};

const Product = async (params) => {
  "use server";
  const data = await getProductDataById(params.params.productId);

  return <ProductItem data={data} />;
};

export default Product;
