import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import CustomCard from "../../global/CustomCard/CustomCard";

import getProductsData from "./ProductListingService";
import Link from "next/link";

const ProductListing = (props) => {
  console.log(props.props)
  // useEffect(() => {
  //   fetchProductDetails();
  //   console.log(productDetails);
  //   // setProductDetails(...products);
  // }, []);

  // useEffect(() => {
  //   console.log(productDetails);
  // }, [productDetails]);

  // const fetchProductDetails = async () => {
  //   const response = await getProductsData();
  //   setProductDetails(response);
  // };

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <h1>Products</h1>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          maxWidth={"800px"}
        >
          {props.props.map((product) => {
            return (
              <Grid item>
                <Link href={`/product/${product.Id}`} >
                  <Box>
                    <CustomCard
                      heading={product.Name}
                      url={product.URL}
                      description={product.Description}
                    />
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export async function getServerSideProps(context) {
  const data = await getProductsData();
  console.log(data);
  return {
    props: data,
  }
  
}

export default ProductListing;
