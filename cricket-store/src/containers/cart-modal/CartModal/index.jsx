"use client";

import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { selectProducts } from "@/state/cartSlice";
import { emptyCart } from "@/state/cartSlice";
import { increaseQty } from "@/state/cartSlice";
import { decreaseQty } from "@/state/cartSlice";
import CartItems from "../CartItems";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useDispatch } from "react-redux";

export const Cart = ({ isCartOpen, handleCartClose }) => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  const decreaseProductQty = (productId) => {
    dispatch(decreaseQty(productId));
  };

  const increaseProductQty = (productId) => {
    dispatch(increaseQty(productId));
  };

  const clearCart = () => {
    dispatch(emptyCart());
  };


  const getTotalAmount = (products) => {
    let totalAmount = 0;
    products.forEach((element) => {
      totalAmount += element.price * element.quantity;
    });
    return totalAmount;
  };


  return (
    <Dialog
      open={isCartOpen}
      onClose={handleCartClose}
      fullWidth
      maxWidth={"sm"}
    >
      <DialogTitle fontWeight={"bold"} textAlign={"center"}>
        Your Cart
      </DialogTitle>
      <DialogContent>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h5">Total Amount:</Typography>
          <Typography variant="h5">₹{getTotalAmount(products)}</Typography>
        </Box>
      </DialogContent>
      <DialogContent>
        {products.map((product) => {
          return (
            <>
              <Box marginTop={"0.5rem"} marginBottom={"0.5rem"}>
                <CartItems
                  products={product}
                  decreaseProductQty={decreaseProductQty}
                  increaseProductQty={increaseProductQty}
                />
              </Box>
              <Divider />
            </>
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            clearCart();
          }}
        >
          Clear Cart
        </Button>
        <Button onClick={handleCartClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
