import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

interface IFProps {
  href: string;
  background: string;
  color: string;
  title: string;
  desc: string;
  prefix: string;
}
const HeroCard = ({
  href,
  background,
  color,
  title,
  desc,
  prefix,
}: IFProps) => {
  return (
    <div
      className={`group relative grid grid-rows-2 rounded-md ${background} p-6 py-14 ${color}`}
    >
      <Link
        href={href}
        className="absolute right-5 top-5 opacity-0  transition-opacity duration-500 group-hover:opacity-100"
      >
        <ArrowRightCircleIcon className="w-10" />
      </Link>
      <div className="relative row-start-2 transition-all duration-700 group-hover:-translate-y-3/4">
        <span className="text-lg">{prefix}</span>
        <h4 className="mb-3 text-4xl font-semibold">{title}</h4>
        <p className="absolute bottom-0 left-0 translate-y-full opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
