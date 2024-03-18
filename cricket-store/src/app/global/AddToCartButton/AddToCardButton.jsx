"use client";

import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addItem } from "@/app/redux/cartSlice";

const AddToCardButton = (data) => {
  const dispatch = useDispatch();
  const addCart = () =>{
   
    dispatch(addItem(data));
  }
  return <Button variant="contained" onClick={addCart}>Add to Cart</Button>;
};

export default AddToCardButton;
