import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import CustomCard from "@/global/CustomCard/CustomCard";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const ProductListing = (props) => {
  return (
    <>
      <Box sx={{ textAlign: "center", marginBottom: "1rem" }}>
        <Typography variant={"h4"} fontWeight={"bold"}>
          Products
        </Typography>
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
                <Link href={`/product/${product.Id}`}>
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

export default ProductListing;
