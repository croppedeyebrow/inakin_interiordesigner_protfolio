"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgress }}
      className="mb-4 group sm:mb-8 last:mb-0"
    >
      <section
        className="  bg-gray-100 max-w-[42rem] border border-green/10 rounded-lg overflow-hidden relative sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 
      hover:bg-gray-200 transition
    "
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem]">
          <h3 className="text-2xl font-semibold text-black">{title}</h3>
          <p className="mt-2 leading-relaxed text-black text-gray-700">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4 text-black sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.8] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
                key={index}
              >
                {" "}
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="작업한 인테리어 프로젝트"
          quality={96}
          className="absolute top-10 -right-40 w-[29.25rem] rounded-t-lg shadow-2xl 
       
        group-hover:scale-[1.05]
        group-hover:translate-x-3
        group-hover:translate-y-3
        group-hover:rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

           group-even:right-[initial] group-even:-left-40

    
        "
        />
      </section>
    </motion.div>
  );
}
