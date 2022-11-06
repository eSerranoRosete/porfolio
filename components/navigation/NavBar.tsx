"use client";

import Link from "next/link";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
      className="absolute top-0 z-50 w-full"
    >
      <nav className="container m-auto flex items-center justify-between px-10 py-20 text-white lg:py-10">
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
        <Bars2Icon className="w-14 lg:hidden" onClick={() => setMenu(true)} />
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
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`absolute top-0 min-h-screen w-full bg-emerald-500 px-10 py-32 ${
          !menu ? "hidden" : ""
        }`}
      >
        <ul className="flex flex-col space-y-10 text-right text-9xl font-semibold">
          <XMarkIcon
            className="float-right w-28 self-end"
            onClick={() => setMenu(false)}
          />
          <Link href="https://twitter.com/eserrano_r" target="_blank">
            Twitter
          </Link>
          <Link
            href="https://www.linkedin.com/in/eduardo-serrano-46071a19b/"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link href="https://github.com/eSerranoRosete" target="_blank">
            GitHub
          </Link>
          <Link
            target="_blank"
            href="https://inteminer.vercel.app/633519f1042a8c450319d886"
          >
            Contacto
          </Link>
        </ul>
      </div>
    </motion.header>
  );
};

export default NavBar;
