import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    c,
    cpp,
    python,
    html,
    css,
    js,
    react,
    nodejs,
    php,
    mysql,
    mongoDB,
    vscode,
    git,
    github,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Technical Skills
        </h1>
      </section>
      <section>
        <h1 className="text-lg pt-10 text-dark-heading dark:text-light-heading md:text-lg xl:text-lg xl:leading-tight">
          Programming Languages
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={c} title="C" alt="" />
        <img src={cpp} title="Cpp" alt="" />
        <img src={python} title="Python" alt="" />
      </section>
      <br></br><br></br>
      <section>
        <h1 className="text-lg text-dark-heading dark:text-light-heading md:text-lg xl:text-lg xl:leading-tight ">
          Tech Stack
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="Html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={php} title="PHP" alt="" />
        <img src={nodejs} title="Node.js" alt="" />
      </section>
      <section>
        <h1 className="text-lg pt-10 text-dark-heading dark:text-light-heading md:text-lg xl:text-lg xl:leading-tight ">
          Databases
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={mysql} title="MySQL" alt="" />
        <img src={mongoDB} title="MongoDB" alt="" />
      </section>
      <section>
        <h1 className="text-lg pt-10 text-dark-heading dark:text-light-heading md:text-lg xl:text-;g xl:leading-tight ">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
      </section>
    </main>
  );
}

export default Technologies;