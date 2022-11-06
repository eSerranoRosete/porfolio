"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Hero>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="mb-10 text-9xl lg:text-8xl"
        >
          I'm a creative web developer that is ready{" "}
          <span className="font-thin italic opacity-50">
            to take on a challenge.
          </span>
        </motion.h1>
      </Hero>
      <section className="bg-zinc-100">
        <div className="container relative m-auto py-32 px-10 ">
          <hr className="border border-zinc-900/60" />
          <span className="float-right text-3xl lg:text-sm">ABOUT ME</span>
          <div className="mt-32">
            <h2 className="mb-10 text-8xl font-medium text-zinc-900 lg:text-6xl">
              Hi, my name is Eduardo.
            </h2>
            <div className="max-w-4xl text-5xl font-light uppercase lg:text-2xl">
              <p className="mb-10">
                I'm a web developer based in{" "}
                <span className="font-normal italic text-emerald-500 underline">
                  {" "}
                  Mexico City.
                </span>
              </p>
              <p>
                For the last two years I have been designing, building and
                maintaining{" "}
                <span className="font-normal italic text-emerald-500 underline">
                  web applications.
                </span>{" "}
                I enjoy learning new Technologies and constantly challenging
                myself to take on new projects.
              </p>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1C5p77ecQYMn-Fj9cFO_Bi1RcuKpb_fXu/view?usp=share_link"
                className="mt-10 inline-flex w-full items-center justify-center rounded-md border border-zinc-900 px-28 py-3 text-center text-5xl text-zinc-900 lg:w-auto lg:text-lg"
              >
                View Resume <ArrowLongRightIcon className="ml-2 w-10 lg:w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-32">
        <div className="container m-auto grid auto-rows-min gap-20 rounded-md bg-black px-10 py-20 text-white shadow-xl lg:grid-cols-3 lg:gap-5 lg:py-10">
          <span className="h-20 text-6xl font-medium lg:col-span-3 lg:text-3xl">
            Skills
            <Link
              href="/skills"
              className="float-right flex items-center text-3xl font-light uppercase lg:text-sm"
            >
              View Full Skill Set{" "}
              <ArrowLongRightIcon className="ml-2 w-10 lg:w-6" />
            </Link>
          </span>
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">The Basics</h6>
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
              Advanced Technologies
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
          </div>
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">Tools</h6>
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
        </div>
      </section>
      <section className="bg-emerald-500">
        <div className="container m-auto px-10 py-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-20 text-8xl lg:text-6xl"
          >
            See these <i className="font-thin">skills in action</i> by exploring
            some of my latest projects.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/projects"
              className="flex cursor-pointer items-center text-5xl lg:text-xl"
            >
              View Latest Projects{" "}
              <ArrowLongRightIcon className="ml-3 w-12 lg:w-8" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
