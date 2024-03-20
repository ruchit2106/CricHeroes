import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import CustomCard from "@/global/CustomCard/CustomCard";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const ProductListing = (props) => {
  return (
    <>
      <Box sx={{ textAlign: "center", marginBottom: "2.5rem" }}>
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
                <Link
                  href={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box>
                    <CustomCard
                      heading={product.name}
                      url={product.url}
                      description={product.shortDesc}
                      price={product.price}
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
