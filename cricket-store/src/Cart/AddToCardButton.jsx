"use client";

import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/cartSlice";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const AddToCardButton = (data) => {
  const { Id, URL, Name, Price } = data.data;
  const Quantity = 1;
  const newItem = { Id, URL, Name, Price, Quantity };

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(addItem(newItem));
    handleClick();
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={addCart}>
        Add to Cart
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Item added to Cart
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddToCardButton;
