"use client";

import Hero from "../../components/Hero";
import { motion } from "framer-motion";
import Head from "next/head";
import Footer from "../../components/Footer";

const Skills = () => {
  return (
    <>
      <Head>
        <title>Skills and aptitudes - Eduardo Serrano</title>
      </Head>
      <Hero>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="mb-10 text-9xl lg:text-8xl"
        >
          He estado aprendiendo muchas cosas ultimamente{" "}
          <span className="font-thin italic opacity-50">y me encanta.</span>
        </motion.h1>
      </Hero>
      <section className="bg-emerald-500 px-10 py-32">
        <div className="container m-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-20 text-8xl lg:text-6xl"
          >
            Comprometido con{" "}
            <i className="font-thin">el proceso de aprendizaje</i> de nuevas
            tecnologías y habilidades.
          </motion.h2>
        </div>
        <div className="container m-auto grid auto-rows-min gap-20 rounded-md bg-black px-10 py-20 text-white shadow-xl lg:grid-cols-3 lg:gap-10 lg:py-10">
          <span className="h-20 text-6xl font-medium lg:col-span-3 lg:text-3xl">
            Habilidades
          </span>
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">Lo Básico</h6>
            <h5 className="text-8xl font-bold lg:text-5xl">
              HTML5{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">97%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              CSS3{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">92%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Javascript{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">90%</span>
            </h5>
          </div>
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">
              Tecnologías Avanzadas
            </h6>
            <h5 className="text-8xl font-bold lg:text-5xl">
              React{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">87%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Next JS{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">90%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Node JS{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">95%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Express{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">93%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Tailwind CSS{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">98%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              TypeScript{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">60%</span>
            </h5>
          </div>
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">Herramientas</h6>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Git{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">86%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              GitHub{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">97%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Figma{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">90%</span>
            </h5>
          </div>
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">Bases de Datos</h6>
            <h5 className="text-8xl font-bold lg:text-5xl">
              MySQL{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">87%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              MongoDB{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">93%</span>
            </h5>
          </div>
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">
              Otros Lenguajes
            </h6>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Python{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">89%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              PHP{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">80%</span>
            </h5>
          </div>
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">Comunicación</h6>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Spanish{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">99%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              English{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">99%</span>
            </h5>
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          viewport={{ once: true }}
          className="container m-auto mt-16 mb-20 text-right text-7xl lg:text-4xl"
        >
          Si, esta lista la mantengo{" "}
          <i className="font-thin">constantemente actualizada.</i>
        </motion.h2>
      </section>
      <Footer />
    </>
  );
};

export default Skills;
