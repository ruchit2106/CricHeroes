import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Container>
        <Typography variant="h4" textAlign={"center"} fontWeight={"bold"}>
          CRICKET STORE
        </Typography>
      </Container>
      {/* <Image
          // src="/Cricket.jfif"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
    </>
  );
};
export default Home;
