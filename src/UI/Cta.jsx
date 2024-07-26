import Button from "./components/Button";
import arrowup from "../assets/arrowup.svg";
import Reveal from "./components/Reveal";

function Cta() {
  return (
    <Reveal>
      <div className="xl:mx-32 flex flex-col mb-24 phone:mb-10">
        <div className="pl-[1rem] leading-[1.2] midPhone:pl-0">
          <div className="text-[1.2rem] font-sf-regular phone:text-[0.8rem] smallPhone:text-[0.5rem">
            Experiences matter
          </div>
          <div className="text-[6rem] phone:text-[3.5rem] font-sf-rounded smallPhone:text-[2.5rem]">
            Let&apos;s talk!
          </div>
        </div>
        <div className="pl-[1rem] midPhone:pl-0">
          <Button
            text={"newtonfav@gmail.com"}
            image={arrowup}
            alt={"arrowup icon"}
            textsize={
              "text-[0.9rem] phone:text-[0.6rem] smallPhone:text-[0.4rem]"
            }
            padding={"py-[0.4rem] px-[1rem] phone:py-0 phone:px-0"}
            marginheight={"my-4 phone:my-3 "}
            href={"mailto:newtonfav@gmail.com"}
          />
        </div>
      </div>
    </Reveal>
  );
}

export default Cta;
