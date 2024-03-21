import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

const About = () => {
  return (
    <>
      <Container>
        <Typography variant="h5" textAlign={"center"} marginTop={"10rem"} >
            Empowering cricketers worldwide with premium gear
          <Box  fontWeight={"bold"}>
          We are your ultimate destination for all things cricket 
          </Box>
        </Typography>
      </Container>
    </>
  );
};
export default About;
