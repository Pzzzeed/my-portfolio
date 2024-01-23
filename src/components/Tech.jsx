import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tilt
      className="xs:w-[100px] m-auto "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.1, 2)}
        className="w-full gp-[1px] rounded-[20px] shadow-card "
      >
        <img
          src={icon}
          alt="technologies"
          className="w-16 h-16 object-contain "
        />
        {isHovered && (
          <span className="absolute items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            {name}
          </span>
        )}
      </motion.div>
    </Tilt>
  );
};

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

export default SectionWrapper(Tech, 'Tech');
