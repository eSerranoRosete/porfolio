import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import { SkillsCardInterface } from "../../components/SkillsCard/SkillsCardSection";

const Skills = () => {
  const skills: SkillsCardInterface[] = [
    {
      title: "Lo Básico",
      items: [
        { type: "HTML", percentage: 97 },
        { type: "CSS3", percentage: 92 },
        { type: "Javascript", percentage: 90 },
      ],
    },
    {
      title: "Tecnologías Avanzadas",
      items: [
        { type: "React", percentage: 87 },
        { type: "NextJS", percentage: 90 },
        { type: "NodeJS", percentage: 95 },
        { type: "Express", percentage: 93 },
      ],
    },
    {
      title: "Herramientas",
      items: [
        { type: "Git", percentage: 86 },
        { type: "GitHub", percentage: 97 },
        { type: "Figma", percentage: 90 },
      ],
    },
    {
      title: "Bases De Datos",
      items: [
        { type: "MySQL", percentage: 87 },
        { type: "MongoDB", percentage: 93 },
      ],
    },
    {
      title: "Otros Lenguajes",
      items: [
        { type: "Python", percentage: 89 },
        { type: "PHP", percentage: 78 },
      ],
    },
    {
      title: "Comunicación",
      items: [
        { type: "Español", percentage: 99 },
        { type: "Inglés", percentage: 99 },
      ],
    },
  ];
  return (
    <div>
      <Hero>
        <h1 className="mb-10">
          He estado aprendiendo muchas cosas ultimamente{" "}
          <i className="font-thin opacity-30"> y me encanta.</i>
        </h1>
      </Hero>
      <main className="bg-emerald-500 py-32">
        <section className="container m-auto flex min-h-max max-w-md items-center p-10">
          <h3 className="text-4xl font-medium">
            Comprometido con el{" "}
            <i className="font-extralight">proceso de aprendizaje</i> de nuevas
            tecnologías y habilidades.
          </h3>
        </section>
        <section className="p-5">
          <SkillsCard elements={skills} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
