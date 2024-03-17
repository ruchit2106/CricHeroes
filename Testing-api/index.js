import express from "express";
import samplecontroller from "./sampleController.js";
import cors from "cors";

const app = express();
app.use(cors());

//FETCH PARTICULAR PRODUCT
// app.use("/products/");

//FETCH ALL PRODUCTS
app.use("/products", samplecontroller);

app.listen(3001, () => {
  console.log(3001, "SERVER WORKING");
});
