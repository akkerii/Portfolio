import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleTechs, setVisibleTechs] = useState([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const techId = entry.target.getAttribute("data-tech-id");
            setVisibleTechs((prev) => [...new Set([...prev, techId])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".tech-item")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My technical skills
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Technologies.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology, index) => (
          <motion.div
            variants={fadeIn("right", "spring", index * 0.1, 0.75)}
            className="w-28 h-28 tech-item"
            key={technology.id}
            data-tech-id={technology.id}
          >
            {isMobile ? (
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-20 h-20 object-contain"
              />
            ) : (
              visibleTechs.includes(technology.id) && (
                <BallCanvas icon={technology.icon} />
              )
            )}
            <p className="text-center text-secondary text-[14px] mt-2">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
