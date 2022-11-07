"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-5 px-2">
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
    </header>
  );
};

export default MainMenu;
