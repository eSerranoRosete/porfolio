"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MainMenu = () => {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: "-150%" }}
      animate={{ y: 0 }}
      transition={{ ease: "easeInOut" }}
      className="absolute top-5 z-50 w-full px-2"
    >
      <nav>
        <ul className="mx-auto flex max-w-sm items-center justify-between rounded-2xl bg-black px-8 py-2 text-base text-white shadow-xl">
          <li>
            <Link
              href="/"
              className={`cursor-pointer border-b-2 border-black pb-1 opacity-70 hover:opacity-100 ${
                pathname == "/"
                  ? "border-emerald-500 text-emerald-500 opacity-100"
                  : ""
              }`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className={`cursor-pointer border-b-2 border-black pb-1 opacity-70 hover:opacity-100 ${
                pathname == "/skills"
                  ? "border-emerald-500 text-emerald-500 opacity-100"
                  : ""
              }`}
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`cursor-pointer border-b-2 border-black pb-1 opacity-70 hover:opacity-100 ${
                pathname == "/projects"
                  ? "border-emerald-500 text-emerald-500 opacity-100"
                  : ""
              }`}
            >
              Proyectos
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default MainMenu;
