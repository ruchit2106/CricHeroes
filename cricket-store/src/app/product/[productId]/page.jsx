import Box from "@mui/material/Box";
import { Grid, Container } from "@mui/material";
import { getProductDataById } from "@/Screens/ProductListingPage/ProductListingService";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";
import AddToCardButton from "@/Cart/AddToCardButton";
import Image from "next/image";

const Product = async (params) => {
  const data = await getProductDataById(params.params.productId);

  return (
    <Container maxWidth="md" sx={{ marginTop: "10rem" }}>
      <Grid container>
        <Grid item xs={6}>
          <Container sx={{ textAlign: "center" }}>
            <Image src={data.url} width={300} height={300} />
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" fontWeight={"bold"}>
            {data.name}
          </Typography>
          <Box sx={{ marginBottom: "1rem" }}>
            <Rating
              name="text-feedback"
              value={3}
              size="small"
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
            />
          </Box>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            {data.detailDesc}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            Availability:
            <Box component="span" fontWeight={"bold"}>
              {data.availability}
            </Box>
          </Typography>
          <Divider />
          <Box
            display={"flex"}
            sx={{ marginTop: "1rem" }}
            justifyContent={"space-between"}
          >
            <Typography variant="h5">₹{data.price}</Typography>
            <AddToCardButton data={data} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
