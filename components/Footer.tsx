import Link from "next/link";
import MainMenu from "./MainMenu";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container m-auto flex max-w-md items-center p-10 py-32 text-4xl text-white ">
        <div>
          <p>Te gustaría conectar?</p>
          <p className="mb-10">
            Envíame un{" "}
            <a
              href="mailto:eserrano@inteminer.com"
              className="font-thin italic underline"
            >
              email
            </a>{" "}
            o visita mi{" "}
            <Link
              target="_blank"
              href="https://inteminer.vercel.app/633519f1042a8c450319d886"
              className="font-extralight italic underline"
            >
              Tarjeta Digital
            </Link>
          </p>
          <MainMenu />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
