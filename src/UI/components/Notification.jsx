/* eslint-disable react/prop-types */

import close from "../../assets/close.svg";
import { motion } from "framer-motion";

function Notification({ message, isOpen, toggleOpen }) {
  const variants = {
    open: { opacity: 1, x: "-1%" },
    closed: { opacity: 0, x: "2%" },
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className=" bottom-4 right-4 bg-notification fixed inline-flex rounded-[0.6rem] font-sf-regular text-white p-4 tabletMedium:p-3 phone:p-1  w-max items-center shadow-lg z-50"
    >
      <span className="tabletMedium:text-[0.8rem] phone:text-[0.6rem] phone:p-2">
        {message}
      </span>
      <button className="ml-4 phone:ml-3 " onClick={toggleOpen}>
        <img src={close} alt="close button" />
      </button>
    </motion.div>
  );
}

export default Notification;
