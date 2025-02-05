import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const CertificationCard = ({ index, testimonial, name, image, badge_url }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="w-full flex justify-center mb-7">
      <a href={badge_url} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={name}
          className="w-[120px] h-[120px] object-contain hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>

    <div className="mt-1">
      <h3 className="text-white font-bold text-[24px] text-center mb-4">
        {name}
      </h3>
      <p className="text-white tracking-wider text-[16px]">{testimonial}</p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Achievements</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((certification, index) => (
          <CertificationCard
            key={certification.name}
            index={index}
            {...certification}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
