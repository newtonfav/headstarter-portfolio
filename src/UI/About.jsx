import Reveal from "./components/Reveal";

function About() {
  return (
    <Reveal>
      <div className="flex flex-col items-center mb-10" id="about">
        <div className="mb-6 text-[2rem] font-sf-bold tracking-tight desktop:mb-4 tabletMedium:text-[1.5rem] desktop:text-[1.8rem] smallPhone:mb-1">
          <div>About me</div>
        </div>

        <div className="px-44 mb-8 desktop:px-20 tabletPortrait:px-10 phone:px-4 smallPhone:px-0">
          <p className=" text-[2rem] desktop:text-[1.5rem] tabletMedium:text-[1.2rem] text-center font-sf-medium text-wrap tracking-tight">
            I leverage my professional skills to solve problems, design
            intuitive products, build reliable solutions and scale ideas.
          </p>
        </div>

        <div className="font-sf-medium text-[1.2rem] tracking-tight mb-44 cursor-pointer underline hidden">
          Currently at Ingleswitch
        </div>
        <div className=" mb-44 tabletLandscape:mb-36 tabletPortrait:mb-10"></div>
      </div>
    </Reveal>
  );
}

export default About;
