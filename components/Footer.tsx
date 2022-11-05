import Image from "next/image";
import MainMenu from "./navigation/MainMenu";

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* <div className="justify-content-center container m-auto grid py-24 px-10 text-white md:grid-cols-2">
        <div className="m-auto mb-10 md:m-0">
          <h6 className="mb-5 flex flex-grow items-baseline font-semibold">
            <Image
              src="/inteminer-icon.svg"
              alt="Inteminer Icon"
              width={15}
              height={15}
              className="mr-2"
            />
            EDUARDO SERRANO
          </h6>
          <MainMenu />
        </div>
        <h6 className="text-center text-2xl font-bold md:text-right">
          Lorem, ipsum dolor. <i className="font-extralight"> Lorem, ipsum.</i>
        </h6>
      </div> */}
      <div className="container m-auto py-32 px-10 text-white">
        <div className="mb-20 text-5xl md:text-6xl">
          <p>Want to connect?</p>
          <p>
            Sen me an email at{" "}
            <a
              href="mailto:eserrano@inteminer.com"
              className="font-thin italic underline"
            >
              eserrano@inteminer.com
            </a>
          </p>
        </div>
        <h6 className="mb-5 flex flex-grow items-baseline font-semibold">
          <Image
            src="/inteminer-icon.svg"
            alt="Inteminer Icon"
            width={15}
            height={15}
            className="mr-2"
          />
          EDUARDO SERRANO
        </h6>
        <MainMenu />
      </div>
    </footer>
  );
};

export default Footer;
