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
          <ul className="mt-10 flex items-center space-x-5">
            <a target="_blank" href="https://github.com/eSerranoRosete">
              <li>
                <img className="w-7" src="/github.png" alt="Github" />
              </li>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/eduardo-serrano-46071a19b/"
            >
              <li>
                <img className="w-7" src="/linkedin.png" alt="Linkedin" />
              </li>
            </a>
          </ul>
          <em className="text-base">eserrano@inteminer.com</em>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
