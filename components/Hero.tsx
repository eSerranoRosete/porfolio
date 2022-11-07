const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black ">
      <div className="container m-auto flex min-h-screen max-w-md items-center p-10 text-white ">
        <div className="text-5xl">{children}</div>
      </div>
    </div>
  );
};

export default Hero;
