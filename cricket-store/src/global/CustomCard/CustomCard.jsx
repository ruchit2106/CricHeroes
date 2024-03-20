import { Card, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";

const CustomCard = (props) => {
  return (
    <Card
      sx={{
        width: "12rem",
        "&:hover": {
          backgroundColor: "rgb(236, 236, 236)",
          scale: "1.05",
          boxShadow: "10",
        },
      }}
    >
      <CardMedia
        component="img"
        height="190"
        image={props.url}
        alt="Paella dish"
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" fontWeight={"bold"}>
          {props.heading}
        </Typography>
      </CardContent>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="body1">{props.description}</Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h6" fontWeight={"bold"}>
          ₹{props.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
