import Link from "next/link";
import React from "react";

import HeroCard from "../components/HeroCard/HeroCard";

const Index = () => {
  document.body.style.background = "black";

  return (
    <>
      <div className="min-h-screen bg-black">
        <header className="container m-auto mb-10 p-10">
          <nav className="flex items-center justify-between text-white">
            <Link href="/" className="font-semibold ">
              Eduardo Serrano
            </Link>
            <ul className="flex items-center space-x-10 text-zinc-300">
              <li>
                <Link href="/skills">Skills</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/projects">eserrano@inteminer.com</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container m-auto p-10 text-white">
          <div className="mb-28 grid grid-cols-2 gap-3">
            <h1 className="text-6xl font-semibold">
              Creative Full-stack <br /> Web Developer.
            </h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-zinc-300">
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  placeat rem, at dolorum quibusdam natus.
                </p>
                <span>
                  Lorem ipsum dolor sit.
                  <Link
                    href="#"
                    className="block font-bold text-zinc-200 underline underline-offset-8"
                  >
                    Read the blog.
                  </Link>
                </span>
              </div>
              <div className="text-zinc-300">
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  placeat rem, at dolorum quibusdam natus.
                </p>
                <span>
                  Lorem ipsum dolor sit.
                  <Link
                    href="#"
                    className="block font-bold text-zinc-200 underline underline-offset-8"
                  >
                    Read the blog.
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {heroCards.map((card, i) => (
              <HeroCard
                href={card.href}
                background={card.background}
                color="text-black"
                title={card.title}
                desc={card.desc}
                prefix={`0${i + 1}.`}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

const heroCards = [
  {
    background: "bg-indigo-400",
    title: "View my recent work",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium, dolore.",
    prefix: "01.",
    href: "#",
  },
  {
    background: "bg-emerald-500",
    title: "View my recent work",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium, dolore.",
    prefix: "02.",
    href: "#",
  },
  {
    background: "bg-rose-500",
    title: "View my recent work",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium, dolore.",
    prefix: "03.",
    href: "#",
  },
  {
    background: "bg-zinc-200",
    title: "View my recent work",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium, dolore.",
    prefix: "04.",
    href: "#",
  },
];

export default Index;
