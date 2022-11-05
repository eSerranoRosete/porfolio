import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="absolute top-0 z-50 w-full">
      <nav className="container m-auto flex items-center justify-between px-10 py-6 text-white">
        <h6 className="flex flex-grow items-baseline font-semibold">
          <Image
            src="/inteminer-icon.svg"
            alt="Inteminer Icon"
            width={15}
            height={15}
            className="mr-2"
          />
          EDUARDO SERRANO
        </h6>
        <ul className="flex items-center space-x-6 text-xs">
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
