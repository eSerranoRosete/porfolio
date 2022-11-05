import type { NextPage } from "next";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/navigation/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <section className="bg-zinc-100">
        <div className="container relative m-auto grid grid-cols-3 py-32 px-10 ">
          <div className="col-span-3 mb-24">
            <hr />
            <span className="float-right text-zinc-400">ABOUT ME</span>
          </div>
          <div className="col-span-2">
            <h2 className="mb-10 text-6xl font-medium text-zinc-900">
              Title for about me section
            </h2>
            <div className="text-2xl font-light uppercase">
              <p className="mb-5">
                Lorem ipsum dolor, sit{" "}
                <span className="font-normal italic text-emerald-600 underline">
                  amet consectetur adipisicing elit.
                </span>{" "}
                Numquam iste rem culpa ex laboriosam reprehenderit quis fugiat
                odit quidem eum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium rerum{" "}
                <span className="font-normal italic text-emerald-600 underline">
                  quidem ullam modi
                </span>{" "}
                animi distinctio voluptas incidunt adipisci totam enim itaque
                sit, amet alias id qui quos obcaecati! Facere, eos.
              </p>
            </div>
            <a
              href=""
              className="mt-10 inline-flex items-center rounded-md border border-zinc-900 px-28 py-3 text-center text-lg text-zinc-900"
            >
              Hire Me <ArrowLongRightIcon className="ml-2 w-5" />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-emerald-600">
        <div className="container m-auto px-10 py-32">
          <h2 className="mb-10 text-7xl">
            Another <i className="font-thin">memorable and smart</i> call to
            action that will redirect to the projects page.
          </h2>
          <Link
            href="/projects"
            className="flex cursor-pointer items-center text-2xl"
          >
            View Recent Projects <ArrowLongRightIcon className="ml-3 w-10" />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
