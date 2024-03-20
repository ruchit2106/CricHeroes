import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Container>
        <Typography variant="h4" textAlign={"center"} marginTop={"10rem"}>
          Hit your cricketing goals with top-quality gear
          <Box fontWeight={"bold"}>
            Welcome to your one-stop
            <Box component={'span'} color={'orange'} marginLeft={"0.5rem"}>
               Cricket Store
            </Box>
          </Box>

        </Typography>
      </Container>
    </>
  );
};
export default Home;
