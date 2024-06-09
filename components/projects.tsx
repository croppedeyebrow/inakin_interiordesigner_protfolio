import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Interior Projects</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section
      className=" group bg-gray-100 max-w-[42rem] border border-green/10 overflow-hidden relative sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 
      hover:bg-gray-200 transition
    "
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem]">
        <h3 className="text-black text-2xl font-semibold">{title}</h3>
        <p className="text-black mt-2 leading-relaxed text-gray-700">
          {description}
        </p>
        <ul className="text-black flex flex-wrap mt-4 gap-2 sm:mt-auto">
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
        group-hover:translate-x-3
        group-hover:translate-y-3
        group-hover:rotate-2
           group-even:right-[initial] group-even:-left-40
        "
      />
    </section>
  );
}
