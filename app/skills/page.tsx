import type { NextPage } from "next";
import Link from "next/link";
import Hero from "../../components/Hero";

const Skills: NextPage = () => {
  return (
    <>
      <Hero>
        <h1 className="mb-10 text-9xl lg:text-8xl">
          I have been learning{" "}
          <span className="font-extralight italic opacity-40">
            a lot of things lately.
          </span>
        </h1>
      </Hero>
      <section className="bg-emerald-500 px-10 py-32">
        <div className="container m-auto">
          <h2 className="mb-20 text-8xl lg:text-6xl">
            Another <i className="font-thin">memorable and smart</i> call to
            action that will redirect to the projects page.
          </h2>
        </div>
        <div className="container m-auto grid auto-rows-min gap-20 rounded-md bg-black px-10 py-20 text-white shadow-xl lg:grid-cols-3 lg:gap-10 lg:py-10">
          <span className="h-20 text-6xl font-medium lg:col-span-3 lg:text-3xl">
            Skills
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
            <h5 className="text-8xl font-bold lg:text-5xl">
              Tailwind CSS{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              TypeScript{" "}
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
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">Databases</h6>
            <h5 className="text-8xl font-bold lg:text-5xl">
              MySQL{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              MongoDB{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
          </div>
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">
              Other Languages
            </h6>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Python{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              PHP{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
          </div>
          <div>
            <h6 className="text-3xl opacity-70 lg:text-base">
              Some Other Languages
            </h6>
            <h5 className="text-8xl font-bold lg:text-5xl">
              Spanish{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
            <h5 className="text-8xl font-bold lg:text-5xl">
              English{" "}
              <span className="text-2xl text-emerald-500 lg:text-xl">100%</span>
            </h5>
          </div>
        </div>
        <h2 className="container m-auto mt-16 mb-20 text-right text-7xl lg:text-5xl">
          Yes, this list gets <i className="font-thin">constantly updated.</i>
        </h2>
      </section>
    </>
  );
};

export default Skills;
