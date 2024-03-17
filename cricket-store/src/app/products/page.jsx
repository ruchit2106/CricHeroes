import ProductListing from "../screens/ProductListingPage/ProductListng";
import getProductsData from "../screens/ProductListingPage/ProductListingService";

const Products = async () => {
    const data = await getProductsData();
    return(
        <ProductListing props={data}/>
    );
}
export default Products;
