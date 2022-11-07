"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MainButton from "../components/MainButton";
import SkillsCard from "../components/SkillsCard/SkillsCard";
import { SkillsCardInterface } from "../components/SkillsCard/SkillsCardSection";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const Home = () => {
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
  ];

  return (
    <div>
      <Hero>
        <h1 className="mb-10">
          Desarrollador web creativo{" "}
          <i className="font-thin text-emerald-500">full stack</i> dispuesto a
          tomar un desafío.
        </h1>
      </Hero>
      <main className="bg-zinc-200 pt-32">
        <section className="container m-auto flex max-w-md items-center p-10 ">
          <div className="md:max-w-4xl">
            <h2 className="mb-10 text-5xl font-medium">
              Hola, mi nombre es Eduardo.
            </h2>
            <div className="mb-10 space-y-5 text-xl font-light">
              <p>
                Soy un{" "}
                <i className="font-normal text-emerald-500 underline">
                  Desarrollador Web Full Stack
                </i>{" "}
                localizado en la Ciudad de México. 🇲🇽
              </p>
              <p>
                Por los ultimos dos años, he estado{" "}
                <i className="font-normal text-emerald-500 underline">
                  diseñando, construyendo y manteniendo{" "}
                </i>
                applicaciones web. Disfruto de aprender nuevas tecnologías y
                ponerme nuevos retos constantemente.
              </p>
            </div>
            <MainButton
              target="_blank"
              mode="dark"
              href="https://drive.google.com/file/d/1C5p77ecQYMn-Fj9cFO_Bi1RcuKpb_fXu/view?usp=share_link"
            >
              Ver Curriculum <ArrowUpRightIcon className="ml-2 w-5" />
            </MainButton>
          </div>
        </section>
        <section className="p-5 pb-32">
          <SkillsCard openFull={true} elements={skills} />
        </section>
        <section className="bg-emerald-500">
          <div className="container m-auto flex min-h-screen max-w-md items-center p-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-10 text-4xl font-medium">
                Ve estas{" "}
                <i className="font-extralight">habilidades en práctica</i>{" "}
                explorando algunos de mis proyectos mas recientes.
              </h3>
              <MainButton mode="dark" href="/projects">
                Ver Projectos Recientes{" "}
                <ArrowUpRightIcon className="ml-2 w-5" />
              </MainButton>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
