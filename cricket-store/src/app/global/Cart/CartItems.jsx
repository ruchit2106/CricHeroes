import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CartItems = ({ products, index, removeProduct }) => {
  console.log(index);
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <img src={products.URL} width={60} height={60} />
      <Typography variant="h6" marginTop={"0.8rem"} fontWeight={"bold"}>
        {products.Name}
      </Typography>
      <Typography variant="h6" marginTop={"0.8rem"} fontWeight={"bold"}>
        ₹{products.Price}
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          removeProduct(index);
        }}
        sx={{ height: "2.5rem", width: "5rem", marginTop: "0.8rem" }}
      >
        Remove
      </Button>
    </Box>
  );
};

export default CartItems;
