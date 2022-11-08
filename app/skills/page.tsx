"use client";

import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import { SkillsCardInterface } from "../../components/SkillsCard/SkillsCardSection";
import { motion } from "framer-motion";

const Skills = () => {
  const skills: SkillsCardInterface[] = [
    {
      title: "Básics",
      items: [
        { type: "HTML", percentage: 97 },
        { type: "CSS", percentage: 92 },
        { type: "Javascript", percentage: 92 },
      ],
    },
    {
      title: "Frameworks",
      items: [
        { type: "React", percentage: 87 },
        { type: "NextJS", percentage: 87 },
        { type: "Express", percentage: 90 },
      ],
    },
    {
      title: "Herramientas",
      items: [
        { type: "Git", percentage: 86 },
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
          He estado <i className="font-thin text-emerald-500">aprendiendo</i>{" "}
          muchas cosas ultimamente.
        </h1>
      </Hero>
      <main className="bg-emerald-500 py-32">
        <section className="container m-auto flex min-h-max max-w-md items-center p-10">
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-medium selection:bg-black/20"
          >
            Comprometido con el{" "}
            <i className="font-extralight">proceso de aprendizaje</i> de nuevas
            tecnologías y habilidades.
          </motion.h3>
        </section>
        <section className="p-5">
          <SkillsCard openFull={false} elements={skills} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
