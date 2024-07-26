/* eslint-disable react/prop-types */
import typescript from "../assets/typescript.svg";
import typescript1x from "../assets/typescript2x.png";
import javascript from "../assets/javascript.svg";
import javascript1x from "../assets/javascript2x.png";
import swift from "../assets/swift.svg";
import swift1x from "../assets/swift2x.png";
import c from "../assets/c.svg";
import c1x from "../assets/c2x.png";
import python from "../assets/python.svg";
import python1x from "../assets/python2x.png";
import figma from "../assets/figma.svg";
import figma1x from "../assets/figma2x.png";
import nodejs from "../assets/node.svg";
import nodejs1x from "../assets/node2x.png";
import nestjs from "../assets/nestjs.svg";
import nestjs1x from "../assets/nestjs2x.png";
import express from "../assets/express.svg";
import express1x from "../assets/expressjs2x.png";
import react from "../assets/react.svg";
import react1x from "../assets/React2x.png";
import bootstrap from "../assets/bootstrap.svg";
import bootstrap1x from "../assets/bootstrap2x.png";
import sass from "../assets/sass.svg";
import sass1x from "../assets/sass2x.png";
import redux from "../assets/redux.svg";
import redux1x from "../assets/redux2x.png";
import vscode from "../assets/vscode.svg";
import vscode1x from "../assets/vscode2x.png";
import sublime from "../assets/sublime.svg";
import sublime1x from "../assets/sublime2x.png";
import docker from "../assets/docker.svg";
import docker1x from "../assets/docker2x.png";
import nextjs from "../assets/nextjs.svg";
import nextjs1x from "../assets/nextjs2x.png";
import xcode from "../assets/xcode.svg";
import xcode1x from "../assets/xcode2x.png";
import githubskill from "../assets/githubskill.svg";
import github1x from "../assets/github2x.png";
import tailwind from "../assets/tailwind.svg";
import tailwind1x from "../assets/tailwind2x.png";
import postman from "../assets/postman.svg";
import postman1x from "../assets/postman2x.png";
import git from "../assets/git.svg";
import git1x from "../assets/git2x.png";
import django from "../assets/django.svg";
import django1x from "../assets/django2x.png";
import swagger from "../assets/swagger.svg";
import swagger1x from "../assets/swagger2x.png";
import Reveal from "./components/Reveal";
import framer from "../assets/framer.svg";
import framer1x from "../assets/framer2x.png";

function Skills() {
  const categories = [
    {
      category: "Programming <br/> Languages.",

      skill: [
        {
          name: "Typescript",
          logo: typescript,
          img1x: typescript1x,
        },
        {
          name: "Javascript",
          logo: javascript,
          img1x: javascript1x,
        },
        {
          name: "Python",
          logo: python,
          img1x: python1x,
        },
        {
          name: "Swift",
          logo: swift,
          img1x: swift1x,
        },
        {
          name: "C",
          logo: c,
          img1x: c1x,
        },
      ],
    },

    {
      category: "Libraries & <br/> Frameworks.",
      skill: [
        {
          name: "nodejs",
          logo: nodejs,
          img1x: nodejs1x,
        },
        {
          name: "nestjs",
          logo: nestjs,
          img1x: nestjs1x,
        },
        {
          name: "reactjs",
          logo: react,
          img1x: react1x,
        },
        {
          name: "expressjs",
          logo: express,
          img1x: express1x,
        },
        {
          name: "tailwind",
          logo: tailwind,
          img1x: tailwind1x,
        },
        {
          name: "sass",
          logo: sass,
          img1x: sass1x,
        },
        {
          name: "bootstrap",
          logo: bootstrap,
          img1x: bootstrap1x,
        },
        {
          name: "nextjs",
          logo: nextjs,
          img1x: nextjs1x,
        },
        {
          name: "redux",
          logo: redux,
          img1x: redux1x,
        },
        {
          name: "django",
          logo: django,
          img1x: django1x,
        },
        {
          name: "framer motion",
          logo: framer,
          img1x: framer1x,
        },
      ],
    },
    {
      category: "Web <br/> development tools.",
      skill: [
        {
          name: "vscode",
          logo: vscode,
          img1x: vscode1x,
        },
        {
          name: "sublime text",
          logo: sublime,
          img1x: sublime1x,
        },
        {
          name: "postman",
          logo: postman,
          img1x: postman1x,
        },
        {
          name: "git",
          logo: git,
          img1x: git1x,
        },
        {
          name: "github",
          logo: githubskill,
          img1x: github1x,
        },
        {
          name: "docker",
          logo: docker,
          img1x: docker1x,
        },
        {
          name: "xcode",
          logo: xcode,
          img1x: xcode1x,
        },
        {
          name: "figma",
          logo: figma,
          img1x: figma1x,
        },
        {
          name: "swagger",
          logo: swagger,
          img1x: swagger1x,
        },
        {
          name: "",
          logo: "",
        },
      ],
    },
  ];

  return (
    <div
      className=" xl:mx-32 flex flex-col mb-32 tabletLandscape:mb-24 phone:mb-12"
      id="skills"
    >
      <div className="text-[2rem] font-sf-bold pl-[1rem] mb-8 tracking-tight tabletLandscape:mb-4">
        Skills
      </div>

      <div className="">
        {categories.map((category, index) => (
          <Category category={category} key={index} />
        ))}
      </div>
    </div>
  );

  function Category({ category }) {
    const texts = category.category.split("<br/>");

    return (
      <Reveal>
        <div className="mb-8 py-8 rounded-[20px] bg-white shadow-lg phone:mx-[0.2rem] phone:shadow-sm tabletLandscape:py-4  ">
          <div className="flex flex-row flex-wrap justify-between mb-4 tabletMedium:mb-2 smallPhone:px-4 items-center">
            {category.skill.map((skill, index) => (
              <Skill
                name={skill.name}
                key={index}
                logo={skill.logo}
                img1x={skill.img1x}
              />
            ))}
          </div>
          <div className="font-sf-bold text-[3rem] tabletMedium:text-[2rem] tracking-tight capitalize leading-none px-16 tabletLandscape:pl-4 tabletLandscape:pb-4 smallestPhone:text-[1.3rem]">
            {texts.map((part, index) => (
              <span key={index}>
                {part}
                {index !== texts.length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    );
  }

  function Skill({ logo, name, img1x }) {
    return (
      <div className="flex flex-col mb-10 items-center w-[20%] tabletMedium:w-[25%] overflow-hidden">
        <span className={name === "" ? "hidden" : ""}>
          <img
            src={logo}
            alt={`name && ${name} logo`}
            srcSet={`${img1x} 2x`}
            width="150"
            height="150"
            className="mb-2 tabletMedium:w-[8rem] phone:w-[5rem]  midPhone:w-[4rem]  smallPhone:w-[3rem]  smallestPhone:w-[2.5rem]"
          />
        </span>
        <span className="text-[1rem] font-sf-regular tracking-tight capitalize tabletMedium:text-[0.8rem] phone:text-[0.6rem] smallestPhone:text-[0.5rem]">
          {name}
        </span>
      </div>
    );
  }
}

export default Skills;
