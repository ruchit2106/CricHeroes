import data from "./sample_data.js";

const samplecontroller = (req, res) => {
  console.log(req.headers);
  res.json(data);
};

export default samplecontroller;
