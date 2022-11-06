import MainMenu from "./navigation/MainMenu";
// import { motion } from "framer-motion";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-clip bg-black ">
      <div className="container m-auto flex min-h-screen items-center px-10 text-white ">
        <div>
          {children}
          <MainMenu />
        </div>
      </div>
    </div>
  );
};

export default Hero;
