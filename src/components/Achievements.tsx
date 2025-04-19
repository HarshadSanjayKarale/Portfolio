import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../context/theme-context";
import { achievementsData } from "../assets/lib/data";
import { FaTrophy, FaMedal, FaCertificate, FaAward } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const Achievements: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const animationReference = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const { theme } = useTheme();
  
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["1 1", "1.3 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Map achievement types to icons
  const getAchievementIcon = (type: string) => {
    switch (type) {
      case "award":
        return <FaAward className="w-full h-full" />;
      case "certificate":
        return <FaCertificate className="w-full h-full" />;
      case "medal":
        return <FaMedal className="w-full h-full" />;
      default:
        return <FaTrophy className="w-full h-full" />;
    }
  };

  return (
    <section
      className="achievements-container w-full min-[1921px]:px-[55rem] overflow-x-clip min-h-screen py-20"
      id="achievements"
      ref={ref}
    >
      <div 
        className="title-container flex flex-col gap-8 justify-center items-center py-20"
        ref={animationReference}
      >
        <motion.div
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
            textAlign: "center",
          }}
        >
          <p className={`text-3xl mb-2 mt-4 ${theme === "dark" ? "text-white" : "text-[--black]"}`}>
            <span className="text-[--orange]">&lt;</span>
            Achievements
            <span className="text-[--orange]">/&gt;</span>
          </p>
          <h2 className={`text-6xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-[--black]"}`}>
            My Achievements
          </h2>
          <div className="w-32 h-1.5 bg-[--orange] mx-auto mb-16"></div>
        </motion.div>
      </div>

      <div className="timeline-container flex flex-col gap-24 px-10 md:px-32 mb-32 relative">
        {/* Timeline center line for larger screens */}
        <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-[4px] h-full 
          bg-gradient-to-b from-transparent via-[--orange] to-transparent"></div>

        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            className={`achievement-item flex ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } max-md:flex-col gap-10 md:gap-0 relative min-h-[20rem]`}
            style={{
              transform: isInView
                ? "none"
                : `translateX(${index % 2 === 0 ? "-" : ""}80px)`,
              opacity: isInView ? 1 : 0,
              transition: `all 0.8s ease-out ${0.2 + index * 0.15}s`,
            }}
          >
<div className={`achievement-date w-full md:w-[40%] flex justify-center ${
  index % 2 === 0 
    ? "md:justify-end" 
    : "md:justify-start"
} items-center`}>
  <span
    className={`px-8 py-4 rounded-lg text-2xl font-medium ${
      theme === "dark"
        ? "bg-[--darkblue] text-white border-3 border-[--lightblue]"
        : "bg-[--lightblue] text-[--black] border-3 border-[--orange]"
    } shadow-md`}
  >
    {achievement.date}
  </span>
</div>

            <div className="timeline-connector relative hidden md:flex items-center mx-10">
              <div className="icon-container w-20 h-20 rounded-full flex items-center justify-center z-10 
                shadow-xl shadow-[rgba(255,165,0,0.35)]">
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center p-3 ${
                    theme === "dark"
                      ? "bg-[--darkblue] text-[--orange] border-3 border-[--orange]"
                      : "bg-white text-[--orange] border-3 border-[--orange]"
                  }`}
                >
                  {achievement.type && getAchievementIcon(achievement.type)}
                </div>
              </div>
            </div>

            <div className="md:hidden flex justify-center mb-6">
              <div 
                className={`w-20 h-20 rounded-full flex items-center justify-center p-3 ${
                  theme === "dark"
                    ? "bg-[--darkblue] text-[--orange] border-3 border-[--orange]"
                    : "bg-white text-[--orange] border-3 border-[--orange]"
                } shadow-xl`}
              >
                {achievement.type && getAchievementIcon(achievement.type)}
              </div>
            </div>

            <div
              className={`achievement-content w-full md:w-[40%] p-10 rounded-xl transition-all duration-500 
                transform hover:scale-[1.05] hover:-translate-y-2
                ${
                  theme === "dark"
                    ? "bg-[--darkblue] text-white border-3 border-[--lightblue] shadow-[0_10px_30px_-10px_rgba(0,180,216,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(0,180,216,0.7)]"
                    : "bg-white text-[--black] border-3 border-[--orange] shadow-[0_10px_30px_-10px_rgba(255,165,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(255,165,0,0.5)]"
                }`}
            >
              <h3 className="text-3xl font-bold mb-6 text-[--orange]">{achievement.title}</h3>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">{achievement.description}</p>
              
              {achievement.skills && (
                <div className="skills-container mt-6 flex flex-wrap gap-3">
                  {achievement.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`text-lg px-4 py-2 rounded-full ${
                        theme === "dark"
                          ? "bg-[#252545] text-[--lightblue] border-2 border-[--lightblue]"
                          : "bg-[#f0f0f0] text-[--orange] border-2 border-[--orange]"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;