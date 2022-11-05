import MainMenu from "./navigation/MainMenu";
// import { motion } from "framer-motion";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-clip bg-black ">
      <div className="container m-auto py-64 px-10 text-white ">
        {children}
        <MainMenu />
      </div>
    </div>
  );
};

export default Hero;
