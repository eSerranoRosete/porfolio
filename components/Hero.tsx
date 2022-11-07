"use client";

import { motion } from "framer-motion";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-black/50">
      <div className="container z-20 m-auto flex min-h-screen max-w-md items-center p-10 text-white ">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl"
        >
          {children}
        </motion.div>
      </div>
      <img
        src="/noise-background.png"
        alt=" "
        className="absolute top-0 -z-10 h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default Hero;
