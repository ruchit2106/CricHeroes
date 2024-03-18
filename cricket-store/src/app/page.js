import Image from "next/image";

const Home = () => {
  return (
    <>
      <div>
        <h1 style={{textAlign:'center'}} >WELCOME TO CRICKET STORE</h1>
        <Image
            src="/Cricket.jfif"
            layout="fill"
            objectFit="cover"
            quality={100}
        />

      </div>
    </>
  );
}
export default Home;