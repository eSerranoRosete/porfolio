import type { NextPage } from "next";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero>
        <h1 className="mb-10 text-9xl lg:text-8xl">
          A powerful and impactful title{" "}
          <span className="font-extralight italic opacity-40">
            should be displayed here to cath the attention.
          </span>
        </h1>
      </Hero>
      <section className="bg-zinc-100">
        <div className="container relative m-auto py-32 px-10 ">
          <hr className="border border-zinc-900/60" />
          <span className="float-right text-3xl lg:text-sm">ABOUT ME</span>
          <div className="mt-32">
            <h2 className="mb-10 text-8xl font-medium text-zinc-900 lg:text-6xl">
              Title for about me section
            </h2>
            <div className="text-5xl font-light uppercase lg:text-2xl">
              <p className="mb-10">
                Lorem ipsum dolor, sit{" "}
                <span className="font-normal italic text-emerald-500 underline">
                  amet consectetur adipisicing elit.
                </span>{" "}
                Numquam iste rem culpa ex laboriosam reprehenderit quis fugiat
                odit quidem eum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium rerum{" "}
                <span className="font-normal italic text-emerald-500 underline">
                  quidem ullam modi
                </span>{" "}
                animi distinctio voluptas incidunt adipisci totam enim itaque
                sit, amet alias id qui quos obcaecati! Facere, eos.
              </p>
              <a
                href=""
                className="mt-10 inline-flex w-full items-center justify-center rounded-md border border-zinc-900 px-28 py-3 text-center text-5xl text-zinc-900 lg:w-auto lg:text-lg"
              >
                Hire Me <ArrowLongRightIcon className="ml-2 w-10 lg:w-5" />
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
              Full Skill Set <ArrowLongRightIcon className="ml-2 w-10 lg:w-6" />
            </Link>
          </span>
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">The Basics</h6>
            <h5 className="text-8xl font-bold lg:text-5xl">
              HTML5{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              CSS3{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              HTML5{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
          </div>
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">
              Advanced Technologies
            </h6>
            <h5 className="text-8xl font-bold lg:text-5xl">
              React{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Next JS{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Node JS{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Express{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
          </div>
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">Tools</h6>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Git{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              GitHub{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Figma{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
          </div>
        </div>
      </section>
      <section className="bg-emerald-500">
        <div className="container m-auto px-10 py-32">
          <h2 className="mb-20 text-8xl lg:text-6xl">
            Another <i className="font-thin">memorable and smart</i> call to
            action that will redirect to the projects page.
          </h2>
          <Link
            href="/projects"
            className="flex cursor-pointer items-center text-5xl lg:text-xl"
          >
            View Recent Projects{" "}
            <ArrowLongRightIcon className="ml-3 w-12 lg:w-8" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
