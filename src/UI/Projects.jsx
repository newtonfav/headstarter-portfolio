/* eslint-disable react/prop-types */

import zwilt from "../assets/zwilt.svg";
import zwilt1x from "../assets/zwilt1x.png";
import zwilt2x from "../assets/zwilt2x.png";
import cabify from "../assets/cabify.svg";
import cabify1x from "../assets/cabify1x.png";
import cabify2x from "../assets/cabify2x.png";
import detect from "../assets/detect.svg";
import detect1x from "../assets/detect1x.png";
import detect2x from "../assets/detect2x.png";
import pupil from "../assets/pupil.svg";
import pupil1x from "../assets/pupil1x.png";
import pupil2x from "../assets/pupil2x.png";
import jettison from "../assets/jettison.svg";
import jettison1x from "../assets/jettison1x.png";
import jettison2x from "../assets/jettison2x.png";
import Reveal from "./components/Reveal";
import Notification from "./components/Notification";
import { useState } from "react";
import { useCycle } from "framer-motion";
import ScreenWidth from "./components/ScreenWidth";

function Projects() {
  const [notification, setNotification] = useState(null);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isHandling, setIsHandling] = useState(false);
  const [width] = ScreenWidth();

  function handleUnpublished(name) {
    if (isHandling || width < 767) return;

    setIsHandling(true);
    setNotification(`${name} is currently undergoing development 🛠️`);
    toggleOpen();

    setTimeout(() => {
      toggleOpen();
      setNotification(null);
      setIsHandling(false);
    }, 3000);
  }

  return (
    <div
      className=" xl:mx-32 flex flex-col mb-28 tabletMedium:mb-16 phone:mb-12"
      id="projects"
    >
      <div className="flex flex-row mb-8 tabletLandscape:mb-4 phone:mb-2">
        <div className="text-[2rem] font-sf-bold pl-[1rem] tracking-tight phone:text-[1.5rem]">
          Projects
        </div>
      </div>

      <Reveal>
        <div className="flex flex-wrap smallPhone:flex-col smallPhone:items-center">
          <Project
            name={"Zwilt"}
            category={"Web Application"}
            image={zwilt}
            img1x={zwilt1x}
            img2x={zwilt2x}
            style={""}
            link={"https://zwilt-favour.vercel.app/"}
          />
          <Project
            name={"Detect"}
            category={"API Service"}
            image={detect}
            img1x={detect1x}
            img2x={detect2x}
            link={"https://github.com/newtonfav/detect"}
          />
          <Project
            name={"Jettison"}
            category={"API Service"}
            image={jettison}
            img1x={jettison1x}
            img2x={jettison2x}
            link={"https://github.com/newtonfav/Jettison"}
          />
          <Project
            name={"Pupil"}
            category={"API Service"}
            image={pupil}
            img1x={pupil1x}
            img2x={pupil2x}
            link={"https://pupil-i83d.onrender.com"}
          />
          <Project
            name={"Cabify"}
            category={"Mobile Application"}
            image={cabify}
            img1x={cabify1x}
            img2x={cabify2x}
            handleUnpublished={handleUnpublished}
          />
        </div>

        {notification && (
          <Notification
            message={notification}
            toggleOpen={() => toggleOpen()}
            isOpen={isOpen}
          />
        )}
      </Reveal>
    </div>
  );

  function Project({
    name,
    category,
    image,
    style,
    link,
    handleUnpublished,
    img1x,
    img2x,
  }) {
    return (
      <div
        className={`container w-4/12 smallPhone:w-full tabletMedium:w-6/12 mb-10 smallPhone:mb-8 rounded-[40px] cursor-pointer ${style} `}
        onClick={handleUnpublished ? () => handleUnpublished(name) : undefined}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={`${name} icon`}
            srcSet={img1x && `${img1x} 1x, ${img2x} 2x`}
            width="900"
            height="859"
          />
          <div className="flex flex-col pl-[2rem] tabletLandscape:pl-[1rem] -mt-[0.5rem] leading-none">
            <span className="text-[1.5rem] tabletLandscape:text-[1.3rem] font-sf-bold pb-[0.5rem] tracking-tighter">
              {name}
            </span>
            <span className="text-[1rem] font-sf-regular tabletLandscape:text-[0.9rem] tracking-tight">
              {category}
            </span>
          </div>
        </a>
      </div>
    );
  }
}

export default Projects;
