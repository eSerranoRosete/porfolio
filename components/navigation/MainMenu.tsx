"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MainMenu = () => {
  const pathname = usePathname();

  return (
    <motion.ul
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex space-x-8 text-4xl lg:text-base"
    >
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
    </motion.ul>
  );
};

export default MainMenu;
