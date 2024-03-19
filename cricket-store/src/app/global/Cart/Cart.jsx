"use client";

import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { selectProducts } from "@/app/redux/cartSlice";
import { removeItem } from "@/app/redux/cartSlice";
import { emptyCart } from "@/app/redux/cartSlice";
import CartItems from "./CartItems";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { getTotalAmount } from "./CartServices";
import { useDispatch } from "react-redux";

export const Cart = ({ isCartOpen, handleCartClose }) => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  const removeProduct = (index) => {
    dispatch(removeItem(index));
  };

  const clearCart = () => {
    dispatch(emptyCart());
  };

  return (
    <Dialog
      open={isCartOpen}
      onClose={handleCartClose}
      fullWidth
      maxWidth={"xs"}
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
        {products.map((product, index) => {
          console.log(product.data);
          return (
            <>
              <CartItems
                products={product.data}
                index={index}
                removeProduct={removeProduct}
              />
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
