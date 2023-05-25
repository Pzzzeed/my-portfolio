import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, icon }) => (
  <Tilt className="xs:w-[100px] m-auto">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 2)}
      className="w-full gp-[1px] rounded-[20px] shadow-card"
    >
      <img
        src={icon}
        alt="technologies"
        className="w-16 h-16 object-contain "
      />
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      <div className=" flex flex-wrap gap-10">
        {technologies.map((tech, index) => (
          <ServiceCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "Tech");
