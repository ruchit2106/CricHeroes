import { getProductDataById } from "@/Screens/ProductListingPage/ProductListingService";
import ProductItem from "@/containers/product-page/product-section";

const Product = async (params) => {
  "use state"
  const data = await getProductDataById(params.params.productId);

  return (
    <ProductItem data={data}/>
  );
};

export default Product;
