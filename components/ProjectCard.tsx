import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import MainButton from "./MainButton";
import TechStack from "./TechStack";

export interface ProjectCardInterface {
  title: string;
  p1: string;
  p2?: string;
  techStack: string[];
  img: string;
  livePreview: string;
  mode: string;
}

const ProjectCard = ({ data }: { data: ProjectCardInterface }) => {
  return (
    <div
      className={`grid grid-cols-1 gap-5 rounded-md border border-black shadow-xl md:grid-cols-2 ${
        data.mode == "dark" ? "bg-black text-white" : "bg-transparent"
      }`}
    >
      <div className="space-y-5 px-5 py-10 md:px-10">
        <h2 className="text-2xl font-semibold">{data.title}</h2>
        <div className="space-y-5 text-lg font-light opacity-80">
          <p>{data.p1}</p>
          <p>{data.p2}</p>
        </div>
        <TechStack
          mode={data.mode == "dark" ? "dark" : "light"}
          items={data.techStack}
        />
        <MainButton
          target="_blank"
          mode={data.mode == "dark" ? "ligh" : "dark"}
          href={data.livePreview}
        >
          Ver Projecto en Vivo <ArrowUpRightIcon className="ml-2 w-5" />
        </MainButton>
      </div>
      <div className="flex items-center justify-center px-10">
        <img src={data.img} alt={data.title} className="max-h-96" />
      </div>
    </div>
  );
};

export default ProjectCard;
