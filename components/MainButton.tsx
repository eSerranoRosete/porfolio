import Link from "next/link";

const MainButton = ({
  href,
  children,
  mode,
}: {
  href: string;
  children: React.ReactNode;
  mode: string;
}) => {
  return (
    <Link
      className={`inline-flex w-full items-center justify-center rounded-md border px-6 py-2 text-sm md:w-fit ${
        mode == "dark" ? "border-black" : "border-white"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default MainButton;
