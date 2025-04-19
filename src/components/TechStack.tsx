import React, { useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import {
  skillsDataDesign,
  skillsDataWeb,
  languagesData, // Import the languagesData
} from "../assets/lib/data";
import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import SkillSection from "./SkillSection";
import RadialGradient from "./RadialGradient";
import { motion, useScroll, useTransform } from "framer-motion";

const TechStack: React.FC = () => {
  const { ref } = useSectionInView("Skills");
  const { theme } = useTheme();
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <React.Fragment>
      <section
        className="relative tech-stack max-lg:p-16 "
        id="skills"
        ref={ref}
      >
        <RadialGradient
          scale="scale-y-[3]"
          opacity={theme === "light" ? "opacity-30" : "opacity-30"}
          position="top-[55rem]"
        />
        <div className="title-container flex flex-col justify-center items-center p-32 w-1/2 gap-6 min-[1921px]:px-[55rem] max-lg:p-0 max-lg:w-full max-lg:items-start max-lg:py-16 ">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
            }}
          >
            <p className="font-black mb-6">
              <span className="text-[--orange]">&lt;</span>Skills
              <span className="text-[--orange]">/&gt;</span>
            </p>
            <h2>
              {language === "DE"
                ? "Meine Techstack und Skills"
                : "My TechStack and Skills"}
            </h2>
          </motion.div>
        </div>

        {/* Web Skills Section - Split into Languages, Frontend, Backend, and Database */}
        <div className="flex flex-col gap-16">
          {/* Languages Skills */}
          <div className="flex justify-center">
            <div className="w-2/3 max-lg:w-full">
              <SkillSection 
                skillsData={languagesData} 
                theme={theme} 
              />
            </div>
          </div>

          {/* Frontend Skills */}
          <div className="flex justify-center">
            <div className="w-2/3 max-lg:w-full">
              <SkillSection 
                skillsData={[skillsDataWeb[0]]} 
                theme={theme} 
              />
            </div>
          </div>

          {/* Backend Skills */}
          <div className="flex justify-center">
            <div className="w-2/3 max-lg:w-full">
              <SkillSection 
                skillsData={[skillsDataWeb[1]]} 
                theme={theme} 
              />
            </div>
          </div>

          {/* Database Skills */}
          <div className="flex justify-center">
            <div className="w-2/3 max-lg:w-full">
              <SkillSection 
                skillsData={[skillsDataWeb[2]]} 
                theme={theme} 
              />
            </div>
          </div>
        </div>

        {/* Design and CMS Skills Section */}
        <div className="flex flex-col items-center mt-16">
          <div className="w-2/3 max-lg:w-full">
            <SkillSection skillsData={skillsDataDesign} theme={theme} />
          </div>
        </div>
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          zIndex: 10,
          backgroundColor: "var(--orange)",
        }}
      />
    </React.Fragment>
  );
};

export default TechStack;
