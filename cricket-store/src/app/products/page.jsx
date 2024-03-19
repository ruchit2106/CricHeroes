import ProductListing from "@/Screens/ProductListingPage/ProductListng";
import { getProductsData } from "@/Screens/ProductListingPage/ProductListingService";

const Products = async () => {
  "use server";
  const data = await getProductsData();
  return <ProductListing props={data} />;
};
export default Products;
