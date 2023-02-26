import Link from "next/link";
import React from "react";

import { ChatBubbleLeftIcon } from "@heroicons/react/20/solid";

const Index = () => {
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
                    className="block font-bold text-white underline underline-offset-8"
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
                    className="block font-bold text-white underline underline-offset-8"
                  >
                    Read the blog.
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <div className="grid grid-rows-3 rounded-md bg-[#E8B5D5] p-6 py-14 text-black">
              <div className="row-span-2"></div>
              <div>
                <span className="text-lg">01.</span>
                <h4 className="text-4xl font-medium">Social Media Marketing</h4>
              </div>
            </div>
            <div className="grid grid-rows-3 rounded-md bg-[#D5E86E] p-6 py-14 text-black">
              <div className="row-span-2"></div>
              <div>
                <span className="text-lg">01.</span>
                <h4 className="text-4xl font-medium">Social Media Marketing</h4>
              </div>
            </div>
            <div className="grid grid-rows-3 rounded-md bg-[#F5BF42] p-6 py-14 text-black">
              <div className="row-span-2"></div>
              <div>
                <span className="text-lg">01.</span>
                <h4 className="text-4xl font-medium">Social Media Marketing</h4>
              </div>
            </div>
            <div className="grid grid-rows-3 rounded-md bg-[#FEF9F7] p-6 py-14 text-black">
              <div className="row-span-2"></div>
              <div>
                <span className="text-lg">01.</span>
                <h4 className="text-4xl font-medium">Social Media Marketing</h4>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
