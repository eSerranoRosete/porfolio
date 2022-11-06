import Link from "next/link";
import MainMenu from "./navigation/MainMenu";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container m-auto py-32 px-10 text-white">
        <div className="mb-20 text-7xl lg:text-6xl">
          <p>Want to connect?</p>
          <p>
            Send me an email at{" "}
            <a
              href="mailto:eserrano@inteminer.com"
              className="font-thin italic underline"
            >
              eserrano@inteminer.com
            </a>{" "}
            or see my{" "}
            <Link
              target="_blank"
              href="https://inteminer.vercel.app/633519f1042a8c450319d886"
              className="font-extralight italic underline"
            >
              Digital Business Card
            </Link>
          </p>
        </div>
        <MainMenu />
      </div>
    </footer>
  );
};

export default Footer;
