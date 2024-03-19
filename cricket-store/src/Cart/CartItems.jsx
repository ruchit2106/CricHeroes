import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from '@mui/material/IconButton';

const CartItems = ({ products,index, removeProduct }) => {
  console.log(products);
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <img src={products.URL} width={60} height={60} />
      <Typography variant="h6" marginTop={"0.8rem"} fontWeight={"bold"}>
        {products.Name}
      </Typography>
      <Typography variant="h6" marginTop={"0.8rem"} fontWeight={"bold"}>
        ₹{products.Price}
      </Typography>
      {/* <Button
        variant="contained"
        color="error"
        onClick={() => {
          removeProduct(index);
        }}
        sx={{ height: "2rem", width: "2rem", marginTop: "0.8rem" }}
      >
        <IconButton children={AddCircleOutlineIcon}/>
      </Button> */}
      <Box sx={{marginTop:"0.5rem"  }}>
        <IconButton><AddCircleOutlineIcon /></IconButton>
        <Box component={"span"} fontWeight={"bold"}>{products.Quantity}</Box>
        <IconButton><RemoveCircleOutlineIcon /></IconButton>

      </Box>
      {/* <AddCircleOutlineIcon/> */}
    </Box>
  );
};

export default CartItems;
