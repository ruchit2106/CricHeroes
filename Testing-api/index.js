import express from "express";
import { getAllProducts } from "./sampleController.js";
import { getProductById } from "./sampleController.js";
import cors from "cors";

const app = express();
app.use(cors());

//FETCH PARTICULAR PRODUCT
app.use("/product/:productId",getProductById);

//FETCH ALL PRODUCTS
app.use("/products", getAllProducts);

app.listen(3001, () => {
  console.log(3001, "SERVER WORKING");
});

module.exports = app;
