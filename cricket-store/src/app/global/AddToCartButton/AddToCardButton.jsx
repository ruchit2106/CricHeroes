"use client";

import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

const AddToCardButton = () => {
  const dispatch = useDispatch();

  return <Button variant="contained">Add to Cart</Button>;
};

export default AddToCardButton;
