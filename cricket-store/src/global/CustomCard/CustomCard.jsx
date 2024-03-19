import { Card, CardContent, CardMedia } from "@mui/material";

const CustomCard = (props) => {
  return (
    <Card
      sx={{
        width: "12rem",
        "&:hover": {
          backgroundColor: "rgb(236, 236, 236)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={props.url}
        alt="Paella dish"
      />
      <CardContent sx={{ textAlign: "center" }}>{props.heading}</CardContent>
      <CardContent sx={{ textAlign: "center" }}>
        {props.description}
      </CardContent>
      <CardContent>PRICE</CardContent>
    </Card>
  );
};

export default CustomCard;
