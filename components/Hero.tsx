import MainMenu from "./navigation/MainMenu";

const Hero = () => {
  return (
    <section className="relative overflow-clip bg-black">
      <div className="container m-auto py-64 px-10 text-white ">
        <h1 className="mb-10 text-8xl">
          A powerful and impactful title{" "}
          <span className="font-extralight italic opacity-40">
            should be displayed here to cath the attention.
          </span>
        </h1>
        <MainMenu />
      </div>
    </section>
  );
};

export default Hero;
