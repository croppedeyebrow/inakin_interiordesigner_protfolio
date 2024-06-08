"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import React from "react";
import {
  BsEnvelope,
  BsDribbble,
  BsBehance,
  BsPinterest,
  BsFileEarmarkPdfFill,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[52rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <Image
              src="/inakimphoto.png"
              alt="photoanimation"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.36rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 130,
              delay: 0.2,
              duration: 0.6,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="color text-black bm-10 mt-4 px-4 text-1xl font-medium leading-[1.6] sm:text-2xl top-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">안녕하세요 InaKim 입니다.</span> 저는{" "}
        <span className="font-bold">인테리어 디자이너입니다</span> <br />
        <span className="font-bold">1년차</span>의 경험을 가지고 있습니다. 저는{" "}
        <span className="font-bold">고객의 요구에 맞는 공간을 만들 때</span>{" "}
        보람을 느낍니다. 제 목표는 {""}{" "}
        <span className="underline">고객이 행복한 공간을 만드는겁니다</span>
      </motion.h1>

      <motion.div
        className="color text-black flex flex-col sm:flex-row items-center justify-center gap-2   font-semibold"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none font-medium mt-8 hover:bg-gray-800 transition-colors transform transition  
          hover:scale-110 shadow-xl"
        >
          Contact me here{" "}
          <BsEnvelope className=" opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full font-medium mt-8 cursor-pointer  hover:underline transform transition duration-500 
        hover:scale-110  shadow-xl"
          href="/CV.pdf"
          download
        >
          이력서 다운로드{" "}
          <HiDownload className=" opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full font-medium mt-8 cursor-pointer  hover:underline transform transition duration-500 
        hover:scale-110 shadow-xl "
          href="/PORTFOLIO.pdf"
          download
        >
          포트폴리오 다운로드{" "}
          <BsFileEarmarkPdfFill className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white  p-4  text-gray-700 flex items-center gap-2 rounded-full font-medium mt-8 cursor-pointer transform transition duration-500 
        hover:scale-110 shadow-xl "
          href="https://dribbble.com/"
          target="_blank"
          rel="noreferrer"
        >
          <BsDribbble />
        </a>
        <a
          className="bg-white p-4 text-gray-700  flex items-center gap-2 rounded-full font-medium mt-8 cursor-pointer transform transition duration-500 
           hover:scale-110 shadow-xl "
          href="https://www.behance.net"
          target="_blank"
          rel="noreferrer"
        >
          <BsBehance />
        </a>
        <a
          className="bg-white p-4 text-gray-700  flex items-center gap-2 rounded-full font-medium mt-8 cursor-pointer transform transition duration-500 
           hover:scale-110 shadow-xl  "
          href="https://kr.pinterest.com/"
          target="_blank"
          rel="noreferrer"
        >
          <BsPinterest />
        </a>
      </motion.div>
    </section>
  );
}
