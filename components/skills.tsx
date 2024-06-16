"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function skills() {
  const { ref } = useSectionInView("Skills", 0.75);

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[54rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Interior Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.15] rounded-xl px-5 py-3"
            key={index}
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
