import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

// type Props = {};

const Home = () => {
  return (
    <main className="flex flex-grow flex-col items-center justify-center px-[5%] lg:px-[15%]">
      <h1 className="bg-[rgba(var(--secondary-color-rgb),1)] p-8 text-6xl text-center">
        For What is Coming <span className="ltr-mix-bg">Next</span>
      </h1>
      <h4 className="p-8 text-center">
        A nextjs boilerplat with Jest, Circle CI, Vercel, Typescript
      </h4>
      <div>
        <ul className="flex flex-wrap gap-10 justify-center">
          <li className="bg-[rgba(var(--secondary-color-rgb),1)] p-3 rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--secondary-color-rgb),1)] cursor-pointer">
            <BsGithub className="w-[2rem] h-[2rem] fill-[rgba(var(--text-color-rgb),1)]" />
          </li>
          <li className="bg-[rgba(var(--secondary-color-rgb),1)] p-3 rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--secondary-color-rgb),1)] cursor-pointer">
            <AiFillInstagram className="w-[2rem] h-[2rem] fill-[rgba(var(--text-color-rgb),1)]" />
          </li>
          <li className="bg-[rgba(var(--secondary-color-rgb),1)] p-3 rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--secondary-color-rgb),1)] cursor-pointer">
            <BsLinkedin className="w-[2rem] h-[2rem] fill-[rgba(var(--text-color-rgb),1)]" />
          </li>
          <li className="bg-[rgba(var(--secondary-color-rgb),1)] p-3 rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--secondary-color-rgb),1)] cursor-pointer">
            <BsFacebook className="w-[2rem] h-[2rem] fill-[rgba(var(--text-color-rgb),1)]" />
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Home;
