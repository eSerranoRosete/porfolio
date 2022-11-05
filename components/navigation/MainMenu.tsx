import Link from "next/link";

const MainMenu = () => {
  return (
    <ul className="flex space-x-8 text-4xl lg:text-base">
      <li>
        <Link
          href="/"
          className="cursor-pointer border-b-2 border-emerald-500 pb-1 font-semibold text-emerald-500"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/skills"
          className="cursor-pointer border-b-2 border-black pb-1 opacity-70 hover:opacity-100"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          href="/projects"
          className="cursor-pointer border-b-2 border-black pb-1 opacity-70 hover:opacity-100"
        >
          Projects
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
