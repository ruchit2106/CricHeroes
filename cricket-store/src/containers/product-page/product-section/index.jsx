"use client";

import Box from "@mui/material/Box";
import { Grid, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";
import { addItem } from "@/state/cartSlice";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectProducts } from "@/state/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tooltip from "@mui/material/Tooltip";
import { useEffect } from "react";
import { useState } from "react";

const ProductItem = ({ data }) => {
  const { id, url, name, price, availability } = data;
  const quantity = 1;
  const newItem = { id, url, name, price, quantity, availability };
  const [shouldAddToCartDisplay, setAddToCartDisplay] = useState(false);
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  useEffect(() => {
    setAddToCartDisplay(shouldButtonDisplayed());
  }, [products]);

  const showToastMessage = () => {
    toast.success("ITEM ADDED TO CART ", {
      position: "bottom-left",
    });
  };

  const shouldButtonDisplayed = () => {
    const index = products.findIndex((product) => product.id == id);

    return !(
      availability === 0 ||
      (index !== -1 &&
        products[index].quantity === products[index].availability)
    );
  };

  const addToCart = () => {
    dispatch(addItem(newItem));
    showToastMessage();
  };

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
            {shouldAddToCartDisplay ? (
              <Button variant="contained" onClick={addToCart}>
                Add to Cart
              </Button>
            ) : (
              <Tooltip title="You've Reached Maximum Availability">
                <Button disabled variant="contained">
                  NO
                </Button>
              </Tooltip>
            )}
            <ToastContainer hideProgressBar={true} autoClose={2500} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductItem;
