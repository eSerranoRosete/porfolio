import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/20/solid";

const NavBar = () => {
  return (
    <header className="absolute top-0 z-50 w-full">
      <nav className="container m-auto flex items-center justify-between px-10 py-10 text-white">
        <Link
          href="/"
          className="flex w-fit items-baseline text-4xl font-semibold lg:text-base"
        >
          {/* <Image
            src="/inteminer-icon.svg"
            alt="Inteminer Icon"
            width={15}
            height={15}
            className="mr-2"
          /> */}
          EDUARDO SERRANO
        </Link>
        <Bars2Icon className="w-14" />
        <ul className="hidden items-center space-x-6 text-xs lg:flex">
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
              href="/contact"
              className="cursor-pointer rounded-md border border-white px-6 py-2 opacity-70 hover:opacity-100"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
