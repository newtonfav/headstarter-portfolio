import scrollIcon from "../assets/scrollIcon.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import mail from "../assets/mail.svg";
import github from "../assets/github.svg";
import Button from "./components/Button";
import Reveal from "./components/Reveal";
import { links } from "./components/Links";
import VideoComponent from "./components/VideoComponent";

function Home() {
  return (
    <div className="font-sf-regular flex flex-col mb-60 tabletLandscape:mb-[9rem] ">
      <Reveal>
        <div className="my-[9rem] tabletPortrait:my-[3rem] phone:my-[1rem]">
          <Heading />
        </div>

        <div>
          <Footer />
        </div>
      </Reveal>
    </div>
  );

  function Heading() {
    return (
      <div className="flex flex-row mb-[9rem] mt-[7rem] phone:mt-[4rem] tabletPortrait:flex-col-reverse items-center justify-center tabletLandscape:mb-[7.5rem] tabletLandscape:mt-[5.5rem] ">
        <div className=" tabletPortrait:flex tabletPortrait:flex-col tabletPortrait:items-center tabletPortrait:text-center">
          <h1 className="bg-clip-text transparent bg-gradient-to-br  from-black to-surfaceblue font-sf-bold text-[3.6rem] desktop:text-[3rem] tabletLandscape:text-[2.5rem] tracking-tight tabletMedium:text-[2.2rem] tabletPortrait:text-[2.8rem] phone:text-[2rem] tabletPortrait:leading-none tabletPortrait:pb-[0.5rem] font-bold ">
            Favour Oghenekowho
          </h1>
          <div className="font-sf-regular text-[1.2rem] w-2/3 tabletPortrait:w-full text-wrap tracking-tight desktop:text-[1rem] tabletLandscape:text-[0.9rem] tabletMedium:text-[0.8rem] tabletPortrait:text-[1rem] phone:text-[0.8rem]">
            A software engineer who’s passionate about design, scalability and
            collaboration.{" "}
          </div>
          <Button
            text={"View Projects"}
            href={"#projects"}
            textsize={"tabletLandscape:text-[0.8rem] phone:text-[0.7rem]"}
            padding={"tabletPortrait:my-4"}
          />
        </div>

        <div className="animation w-[31rem] desktop:w-[28rem] tabletMedium:w-[23rem] phone:w-[20rem]">
          <VideoComponent />
        </div>
      </div>
    );
  }

  function Footer() {
    return (
      <div className="flex flex-row mt-4">
        <div className="inline-flex items-center overflow-hidden phone:hidden">
          <div className="mr-2 tabletLandscape:text-[0.9rem] phone:text-[0.8rem]">
            Scroll Down
          </div>
          <span className="animate-scrollInfinite">
            <img
              src={scrollIcon}
              alt="scroll icon"
              className=" w-[1.5rem]"
              width="24"
              height="24"
            />
          </span>
        </div>

        <div className="socials inline-flex ml-auto">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            <div className="px-3">
              <img
                src={linkedin}
                alt="linkedin icon"
                className="w-[1.6rem] phone:w-[1.2rem]"
                width="44"
                height="44"
              />
            </div>
          </a>

          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <div className="px-3">
              <img
                src={github}
                alt="github icon"
                className="w-[1.6rem] phone:w-[1.2rem]"
                width="43"
                height="44"
              />
            </div>
          </a>

          <a href={links.twitter} target="_blank" rel="noopener noreferrer">
            <div className="px-3">
              <img
                src={twitter}
                alt="twitter icon"
                className="w-[1.6rem] phone:w-[1.2rem]"
                width="44"
                height="44"
              />
            </div>
          </a>

          <a href={links.mail} target="_blank" rel="noopener noreferrer">
            <div className="pl-3">
              <img
                src={mail}
                alt="mail icon"
                className="w-[1.6rem] phone:w-[1.2rem]"
                width="44"
                height="44"
              />
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
