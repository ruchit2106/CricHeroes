import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import IconButton from "@mui/material/IconButton";

const CartItems = ({ products, increaseProductQty, decreaseProductQty }) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <img src={products.URL} width={60} height={60} />
      <Typography variant="h6" marginTop={"0.8rem"} fontWeight={"bold"}>
        {products.Name}
      </Typography>
      <Typography variant="h6" marginTop={"0.8rem"} fontWeight={"bold"}>
        ₹{products.Price}
      </Typography>

      <Box sx={{ marginTop: "0.5rem" }}>
        <IconButton
          onClick={() => {
            decreaseProductQty(products.Id);
          }}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
        <Box component={"span"} fontWeight={"bold"}>
          {products.Quantity}
        </Box>
        <IconButton
          onClick={() => {
            increaseProductQty(products.Id);
          }}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItems;
