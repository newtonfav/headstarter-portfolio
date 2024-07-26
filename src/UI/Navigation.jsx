import { motion, useCycle } from "framer-motion";
import logo from "../assets/logo.svg";
import NavToggle from "./components/NavToggle";
import ScreenWidthComponent from "./components/ScreenWidth";

function Navigation() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [screenWidth] = ScreenWidthComponent();

  return (
    <div className="flex flex-row items-center">
      <Logo />
      <div className="ml-auto inline-flex">
        <Navbar isOpen={isOpen} />
        <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
          <NavToggle
            toggle={() => toggleOpen()}
            width={screenWidth <= 767 ? 30 : ""}
          />
        </motion.div>
        {isOpen || (
          <span
            className={`absolute ${
              screenWidth < 767
                ? "top-[2rem] right-[2rem]"
                : "top-[2.9rem] right-[3.2rem]"
            }  flex h-2 w-2`}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lightblue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-darkblue"></span>
          </span>
        )}
      </div>
    </div>
  );

  function Logo() {
    return (
      <div>
        <img
          src={logo}
          alt="logo"
          className="tabletPortrait:w-[2.5rem]"
          width="54"
          height="32"
        />
      </div>
    );
  }

  function Navbar() {
    const variants = {
      open: { opacity: 1, x: "-5%" },
      closed: { opacity: 0, x: "5%" },
    };

    return (
      <motion.nav
        className="mr-4 inline-flex mt-[0.2rem] phone:mt-[0.5rem] phone:mr-2 "
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.6 }}
      >
        <ul className="inline-flex text-[1rem] phone:text-[0.7rem]">
          <li className="ml-3">
            <a href="#projects">Projects</a>
          </li>
          <li className="ml-3">
            <a href="#skills">Skills</a>
          </li>
          <li className="ml-3">
            <a href="#about">About</a>
          </li>
          <li className="ml-3">
            <a href="#socials">Socials</a>
          </li>
        </ul>
      </motion.nav>
    );
  }
}

export default Navigation;
