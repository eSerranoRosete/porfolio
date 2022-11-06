"use client";

import Link from "next/link";
import Hero from "../../components/Hero";
import TechStackItem from "../../components/TechStackItem";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

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
          Take a look at some of the projects I have{" "}
          <span className="font-thin italic opacity-50">been working on.</span>
        </motion.h1>
      </Hero>
      <section className="space-y-20 bg-zinc-100 py-32">
        <div className="container m-auto gap-5 space-y-10 lg:grid lg:grid-cols-2 lg:space-y-0">
          <div className="col-span-2 space-y-20 rounded-xl border border-black bg-black px-10 py-32 text-white lg:grid lg:grid-cols-2 lg:space-y-0 lg:py-10">
            <div>
              <h2 className="mb-10 text-7xl font-medium lg:text-4xl">
                Digital Business Cards
              </h2>
              <div className="mb-10 text-5xl font-extralight lg:text-xl">
                <p className="mb-5">
                  Web Application for creating digital bussiness cards with{" "}
                  <b>+100 users.</b> Maps through user info stored in database
                  and renders react application. User content served from
                  express REST API with capability for user uploads stored in
                  S3.
                </p>
                <p>
                  Dinamic generation of QR code and VCF file to avoid unnecesary
                  file storage.
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
              className="flex w-full items-center justify-center rounded-md border border-white py-2 text-3xl lg:text-sm"
              href="https://inteminer.vercel.app/6318075e2146d942018ce831"
            >
              Open Live Project{" "}
              <ArrowUpRightIcon className="ml-2 w-10 lg:w-5" />
            </Link>
          </div>

          <div className="space-y-20 rounded-xl border border-black px-10 py-10">
            <div>
              <h2 className="mb-10 text-7xl font-medium lg:text-4xl">
                Real Estate Mortage Simulator
              </h2>
              <div className="mb-10 text-5xl font-extralight lg:text-xl">
                <p className="mb-5">
                  Application used by <b>+75</b> Real Estate agents to calculate
                  mortage payments for a specific company. Application fetches
                  user data from API to determine the email the notification
                  will be sent to when someone uses the Calculator, serving as a
                  lead generator.
                </p>
                <p>
                  Versions for public and certified agents with different inputs
                  and capabilities.
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
              className="flex w-full items-center justify-center rounded-md border border-black py-2 text-3xl lg:text-sm"
              href="https://cotizador.inteminer.com/cliente/6351ebc0b83b047c5dff0b88"
            >
              Open Live Project{" "}
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
                  Static website for company built with astro and deployed to
                  shared hosting. Contact form connected to 3rd party service.
                </p>
                <p>
                  Designed logo and website using tailwindcss design system with
                  fully integrated mobile responsiveness.
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
              className="flex w-full items-center justify-center rounded-md border border-black py-2 text-3xl lg:text-sm"
              href="https://segday.mx"
            >
              Open Live Project{" "}
              <ArrowUpRightIcon className="ml-2 w-10 lg:w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
