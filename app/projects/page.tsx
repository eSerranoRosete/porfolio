"use client";

import Link from "next/link";
import Hero from "../../components/Hero";
import TechStackItem from "../../components/TechStackItem";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const Projects = () => {
  return (
    <>
      <Hero>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="mb-10 text-9xl lg:text-8xl"
        >
          Hecha un vistazo a algunos de los proyectos{" "}
          <span className="font-thin italic opacity-50">
            en los que he trabajado.
          </span>
        </motion.h1>
      </Hero>
      <section className="space-y-20 bg-zinc-100 py-32">
        <div className="container m-auto gap-5 space-y-28 lg:grid lg:grid-cols-2 lg:space-y-0">
          <div className="col-span-2 space-y-20 rounded-xl border border-black bg-black px-10 py-32 text-white lg:grid lg:grid-cols-2 lg:space-y-0 lg:py-10">
            <div>
              <h2 className="mb-10 text-7xl font-medium lg:text-4xl">
                Tarjetas de Presentación Digital
              </h2>
              <div className="mb-10 text-5xl font-extralight lg:text-xl">
                <p className="mb-5 leading-relaxed">
                  Aplicación web para crear tarjetas de presentación digitales
                  con más de <b className="text-emerald-500">100 usuarios.</b>{" "}
                  Obtiene datos de usuario de una{" "}
                  <strong className="text-emerald-500">REST API</strong>{" "}
                  construida con express y con capacidades de almacenamiento de
                  archivos de usuario en S3.
                </p>
                <p className="leading-relaxed">
                  Generación dinámica de QR y VCF para evitar almacemamiento de
                  archivos estáticos.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <TechStackItem type="dark" name="Express" />
                <TechStackItem type="dark" name="Node JS" />
                <TechStackItem type="dark" name="MongoDB" />
                <TechStackItem type="dark" name="React" />
                <TechStackItem type="dark" name="Tailwindcss" />
              </div>
            </div>
            <img
              src="/dbcards-portfolio.png"
              alt="Digital Business Cards Mockup"
              className="m-auto w-full max-w-md self-baseline lg:w-72"
            />
            <Link
              target="_blank"
              className="flex w-full items-center justify-center rounded-md border border-white py-3 text-4xl lg:text-sm"
              href="https://inteminer.vercel.app/6318075e2146d942018ce831"
            >
              Ver Projecto en Vivo
              <ArrowUpRightIcon className="ml-2 w-10 lg:w-5" />
            </Link>
          </div>

          <div className="space-y-20 rounded-xl border border-black px-10 py-10">
            <div>
              <h2 className="mb-10 text-7xl font-medium lg:text-4xl">
                Cotizador de Precios de Terrenos Residenciales
              </h2>
              <div className="mb-10 text-5xl font-extralight lg:text-xl">
                <p className="mb-5 leading-relaxed">
                  Aplicación utilizada por{" "}
                  <b className="text-emerald-500">+75 asesores</b> como medio de
                  captación de clientes. La aplicación te permite calcular el
                  precio de un terreno así como los pagos mensuales. El asesor
                  recibe una{" "}
                  <b className="text-emerald-500">notificación por email</b>{" "}
                  cuando algún cliente utiliza el cotizador.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <TechStackItem type="light" name="Express" />
                <TechStackItem type="light" name="Node JS" />
                <TechStackItem type="light" name="EJS" />
                <TechStackItem type="light" name="Tailwindcss" />
              </div>
            </div>
            <img
              src="/quoter-portfolio.png"
              alt="Real Estate Quoter Project"
              className="m-auto w-full max-w-md self-baseline lg:w-72"
            />
            <Link
              target="_blank"
              className="flex w-full items-center justify-center rounded-md border border-black py-3 text-4xl lg:text-sm"
              href="https://cotizador.inteminer.com/cliente/6351ebc0b83b047c5dff0b88"
            >
              Ver Projecto en Vivo
              <ArrowUpRightIcon className="ml-2 w-10 lg:w-5" />
            </Link>
          </div>

          <div className="space-y-20 rounded-xl border border-black px-10 py-10">
            <div>
              <h2 className="mb-10 text-7xl font-medium lg:text-4xl">
                Segday.mx
              </h2>
              <div className="mb-10 text-5xl font-extralight lg:text-xl">
                <p className="mb-5">
                  Sitio web estático diseñado y construido para una compañía
                  integradora de sistemas de seguridad.
                </p>
                <p>
                  Diseño de logo y sitio web responsibo utilizando sistema de
                  diseño Tailwindcss.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <TechStackItem type="light" name="Astro" />
                <TechStackItem type="light" name="Tailwindcss" />
                <TechStackItem type="light" name="React" />
              </div>
            </div>
            <img
              src="/segday-portfolio.png"
              alt="Segday Website Project"
              className="m-auto w-full self-baseline"
            />
            <Link
              target="_blank"
              className="flex w-full items-center justify-center rounded-md border border-black py-3 text-4xl lg:text-sm"
              href="https://segday.mx"
            >
              Ver Projecto en Vivo
              <ArrowUpRightIcon className="ml-2 w-10 lg:w-5" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
