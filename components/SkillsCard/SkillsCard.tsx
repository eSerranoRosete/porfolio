import SkillsCardSection, { SkillsCardInterface } from "./SkillsCardSection";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const SkillsCard = ({
  elements,
  openFull,
}: {
  elements: SkillsCardInterface[];
  openFull?: boolean;
}) => {
  return (
    <div className="container relative m-auto grid max-w-3xl grid-cols-1 gap-10 overflow-hidden rounded-md bg-black px-5 py-10 text-white shadow-2xl md:grid-cols-2 lg:grid-cols-3">
      <h2 className="z-10 flex items-center justify-between text-3xl font-semibold md:col-span-2 lg:col-span-3">
        Skill Set{" "}
        {openFull ? (
          <Link href="/skills" className="flex items-center text-sm">
            <ArrowTopRightOnSquareIcon className="ml-2 w-6" />
          </Link>
        ) : null}
      </h2>
      {elements.map((section) => (
        <SkillsCardSection key={section.title} props={section} />
      ))}
      {/* <img
        src="/noise-background.png"
        alt=" "
        className="absolute top-0 h-full w-full object-cover object-center opacity-50"
      /> */}
    </div>
  );
};

export default SkillsCard;
