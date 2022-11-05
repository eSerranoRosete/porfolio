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
            </a>
          </p>
        </div>
        <MainMenu />
      </div>
    </footer>
  );
};

export default Footer;
