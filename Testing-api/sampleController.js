import data from "./sample_data.js";

export const getAllProducts = (req, res) => {
  res.json(data);
};

export const getProductById = (req, res) => {
  const { productId } = req.params;
  res.json(data[productId - 1]);
};
