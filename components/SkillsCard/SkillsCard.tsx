import SkillsCardSection, { SkillsCardInterface } from "./SkillsCardSection";

const SkillsCard = ({ elements }: { elements: SkillsCardInterface[] }) => {
  return (
    <div className="container m-auto grid max-w-3xl grid-cols-1 gap-10 rounded-md bg-black px-5 py-10 text-white shadow-2xl md:grid-cols-2 lg:grid-cols-3">
      <h2 className="text-3xl font-semibold md:col-span-2 lg:col-span-3">
        Habilidades
      </h2>
      {elements.map((section) => (
        <SkillsCardSection key={section.title} props={section} />
      ))}
    </div>
  );
};

export default SkillsCard;
