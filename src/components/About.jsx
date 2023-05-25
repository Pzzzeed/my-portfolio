import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, additional, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain "
        />
        <p className="text-white text-[15px] font-bold text-center w-full">
          {additional}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a career switcher who has experience as a marketing executive and
        marketing coordinator After I know that I have a lot of passion for
        being a software developer. Therefore, I decided to be a learner of
        TechUp and Generation Thailand, where I got a lot of skills to be a good
        full-stack software developer not only hard skills (HTML5, CSS,
        JavaScript, React.js, Node.js, MongoDB, PostgreSQL, SCRUM) but also soft
        skills(communication, teamwork, active listening, etc.) I am looking
        forward to applying my whole skills to develop products and services for
        all users. I am seeking an opportunity to continue growing and learning
        as a software developer by leveraging my technical skills and experience
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-36 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
