"use client";

import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
      className="absolute top-0 z-50 w-full"
    >
      <nav className="container m-auto flex items-center justify-between px-10 py-10 text-white">
        <Link
          href="/"
          className="flex w-fit items-baseline text-4xl font-semibold lg:text-base"
        >
          <img
            src="/inteminer-icon.svg"
            alt="Inteminer Icon"
            className="mr-2 w-7 lg:w-4"
          />
          EDUARDO SERRANO
        </Link>
        <Bars2Icon className="w-14 lg:hidden" />
        <ul className="hidden items-center space-x-6 text-sm lg:flex">
          <li className="opacity-70 hover:opacity-100">
            <Link href="https://twitter.com/eserrano_r" target="_blank">
              Twitter
            </Link>
          </li>
          <li className="opacity-70 hover:opacity-100">
            <Link
              href="https://www.linkedin.com/in/eduardo-serrano-46071a19b/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
          <li className="opacity-70 hover:opacity-100">
            <Link href="https://github.com/eSerranoRosete" target="_blank">
              GitHub
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://inteminer.vercel.app/633519f1042a8c450319d886"
              className="cursor-pointer rounded-md border border-white px-6 py-2 opacity-70 hover:opacity-100"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default NavBar;
