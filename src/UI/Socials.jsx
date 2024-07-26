import Reveal from "./components/Reveal";
import { links } from "./components/Links";

/* eslint-disable react/prop-types */
function Socials() {
  const socials = ["linkedin", "github", "twitter", "mail"];
  return (
    <Reveal>
      <div
        className="xl:mx-32 flex flex-col mb-12 border-t border-bcolor py-8 tabletMedium:py-4 midPhone:py-0 "
        id="socials"
      >
        <div className="text-[2rem] font-sf-bold pl-[1rem] tracking-tight phone:text-[1.3rem] tabletMedium:text-[1.6rem] tabletMedium:pl-2 smallPhone:text-[1rem] smallPhone:pl-0">
          Socials
        </div>
        <div className="inline-flex smallPhone:flex-wrap">
          {socials.map((social, index) => (
            <Social social={social} key={index} links={links} />
          ))}
        </div>
      </div>
    </Reveal>
  );

  function Social({ social, links }) {
    return (
      <div className="m-4 cursor-pointer text-[2rem] tabletLandscape:text-[1.8rem] phone:text-[1.3rem] tabletMedium:text-[1.6rem] tabletLandscape:m-2 font-sf-medium tracking-tight smallPhone:text-[1rem] smallPhone:m-1">
        <a
          className="capitalize"
          href={links[social]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social}
        </a>
      </div>
    );
  }
}

export default Socials;
