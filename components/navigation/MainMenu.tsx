"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  return (
    <ul className="flex space-x-8 text-4xl lg:text-base">
      <li>
        <Link
          href="/"
          className={`cursor-pointer border-b-2 border-black pb-1 opacity-70 hover:opacity-100 ${
            pathname == "/"
              ? "border-emerald-500 text-emerald-500 underline"
              : ""
          }`}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/skills"
          className={`cursor-pointer border-b-2 border-black pb-1 opacity-70 hover:opacity-100 ${
            pathname == "/skills"
              ? "border-emerald-500 text-emerald-500 underline"
              : ""
          }`}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          href="/projects"
          className={`cursor-pointer border-b-2 border-black pb-1 opacity-70 hover:opacity-100 ${
            pathname == "/projects"
              ? "border-emerald-500 text-emerald-500 underline"
              : ""
          }`}
        >
          Projects
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
