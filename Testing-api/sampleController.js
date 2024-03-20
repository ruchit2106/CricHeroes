import data from "./sample_data.js";

export const getAllProducts = (req, res) => {
  res.json(data);
};

export const getProductById = (req, res) => {
  const { productId } = req.params;

  const product = data.filter((element) => {
    if (element.id == productId) return element;
  });

  console.log(product);

  res.json(product[0]);
};
