import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import IconButton from "@mui/material/IconButton";

const CartItems = ({ products, increaseProductQty, decreaseProductQty }) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <img src={products.url} width={60} height={60} />
      <Typography variant="h6" marginTop={"0.8rem"} fontWeight={"bold"}>
        {products.name}
      </Typography>
      <Typography variant="h6" marginTop={"0.8rem"} fontWeight={"bold"}>
        ₹{products.price}
      </Typography>

      <Box sx={{ marginTop: "0.5rem" }}>
        <IconButton
          onClick={() => {
            decreaseProductQty(products.id);
          }}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
        <Box component={"span"} fontWeight={"bold"}>
          {products.quantity}
        </Box>
        <IconButton
          onClick={() => {
            increaseProductQty(products.id);
          }}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItems;
