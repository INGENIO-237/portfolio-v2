"use client";

import { getKey } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Page() {
  const experiences = [
    {
      period: "Mar. 2024 - Present",
      position: "Trainer",
      company: "Mentalists",
    },
    {
      period: "Jan. 2022 - Present",
      position: "Software Engineer",
      company: "Mentalists",
    },
    {
      period: "Sept. 2022 - Dec. 2022",
      position: "Web Developer - Freelance",
      company: "MYWAY Consulting SARL",
    },
    {
      period: "Jul. 2021 - Aug. 2021",
      position: "Web Developer Intern",
      company: "IME-SCHOOL",
    },
  ];

  return (
    <>
      <div className="max-w-[500px] space-y-5">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          Timeline of my <span className="text-[#2a9d8f]">professional</span> journey
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          optio quis a laboriosam quam odio maiores, voluptate perferendis
          veritatis mollitia?
        </p>
      </div>
      {/* Desktop */}
      <div className="mt-5 hidden md:flex md:gap-5 md:flex-wrap">
        {experiences.map((exp, index) => (
          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={getKey()}
            className="md:w-[30%]"
          >
            <h3 className="font-bold flex gap-2 text-2xl">
              <span>᛫</span>
              <span className="text-[#2a9d8f]">{exp.position}</span>
            </h3>
            <div className="p-5 border-l-4 border-dotted">
              <h3 className="font-bold text-xl">{exp.period}</h3>
              <p>{exp.company}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile */}
      <div className="mt-5 md:hidden block">
        {experiences.map((exp, index) => (
          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={getKey()}
            className="w-full h-[150px]"
          >
            <h3 className="font-bold flex gap-2 text-2xl">
              <span>᛫</span>
              <span>{exp.period}</span>
            </h3>
            <div className="p-5 border-l-4 border-dotted">
              <h3 className="font-bold text-xl text-[#2a9d8f]">{exp.position}</h3>
              <p>{exp.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
