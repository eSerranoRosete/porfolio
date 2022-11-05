import MainMenu from "./navigation/MainMenu";
// import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-clip bg-black">
      <div className="container m-auto py-64 px-10 text-white ">
        <h1 className="mb-10 text-9xl lg:text-8xl">
          A powerful and impactful title{" "}
          <span className="font-extralight italic opacity-40">
            should be displayed here to cath the attention.
          </span>
        </h1>
        <MainMenu />
      </div>
    </div>
  );
};

export default Hero;
