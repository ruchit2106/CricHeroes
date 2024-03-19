"use client";

import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/cartSlice";

const AddToCardButton = (data) => {
  console.log(data)
  const {Id,URL,Name,Price} = data.data;
  const Quantity=1;
  const newItem = {Id,URL,Name,Price,Quantity};
  console.log(newItem);

  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(addItem(newItem));
  };
  return (
    <Button variant="contained" onClick={addCart}>
      Add to Cart
    </Button>
  );
};

export default AddToCardButton;
