import ProductItems from "@/containers/products-page/products-section";
import { getProductsData } from "@/Screens/ProductListingPage/ProductListingService";

const Products = async () => {
  "use server";
  const data = await getProductsData();
  return <ProductItems props={data} />;
};
export default Products;
