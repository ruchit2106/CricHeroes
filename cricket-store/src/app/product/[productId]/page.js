import Box from "@mui/material/Box";
import { Grid, Container } from "@mui/material";
import { getProductDataById } from "@/app/screens/ProductListingPage/ProductListingService";
import CustomCard from "@/app/global/CustomCard/CustomCard";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddToCardButton from "@/app/global/AddToCartButton/AddToCardButton";

const Product = async (params) => {
  const data = await getProductDataById(params.params.productId);

  return (
    <Container maxWidth="md" sx={{ marginTop: "10rem" }}>
      <Grid container>
        <Grid item xs={6}>
          <Container sx={{ textAlign: "center" }}>
            <img src={data.URL} width={300} height={300} />
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" fontWeight={"bold"}>
            {data.Name}
          </Typography>
          <Box sx={{ marginBottom: "1rem" }}>
            <Rating
              name="text-feedback"
              value={1}
              size="small"
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
            />
          </Box>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            {data.Description}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            Availability:
            <Box component="span" fontWeight={"bold"}>
              5
            </Box>
          </Typography>
          <Divider />
          <Box
            display={"flex"}
            sx={{ marginTop: "1rem" }}
            justifyContent={"space-between"}
          >
            <Typography variant="h5">₹500</Typography>
            <AddToCardButton data={data}/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
