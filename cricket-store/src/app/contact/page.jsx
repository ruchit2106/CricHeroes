import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Container>
        <Typography variant="h5" textAlign={"center"} marginTop={"10rem"}>
          <Box fontWeight={"bold"}>
          Contact Us
          </Box>
          Need help? Tell us more and we'll be happy to assist you
        </Typography>
      </Container>
    </>
  );
};
export default Contact;
