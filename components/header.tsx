"use client";

// 클라이언트 컴포넌트 는, 버튼 또는 검색창과 같이 사용자와 상호작용하는 작은 UI 들을 클라이언트 단에서 렌더링되는 컴포넌트를 뜻
// 'use client' 를 파일의 최상단(import 보다 위, 첫 번째 줄)에 입력하면, 하위 구성요소를 포함하여 해당 파일로 가져온
// 다른 모든 모듈이 클라이언트 번들의 일부로 간주된다.
// 즉, 모든 파일에서 'use client' 를 선언하지 않아도, 진입점에서 한 번만 정의해주면 된다.

// 서버 컴포넌트 란, 말 그대로 서버 부분에서 렌더링 되는 컴포넌트이다.
// 사용자와 상호작용하는 버튼 또는 검색창 UI 등을 제외한 나머지가 서버에서 렌더링되는 방식이다.
// 모든 컴포넌트는 !서버 컴포넌트 가 기본이다.!
// 따라서 클라이언트 컴포넌트 로 사용하고 싶다면, 'use Client' 를 입력해주면 된다.

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { link } from "fs";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active_section_context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <div className=" fixed left-0 top-0 z-[999] w-full sm:w-[initial]">
      <motion.div
        className="fixed left-0 top-0 flex h-[4.5rem] w-full !translate-x-0 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 px-4 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 dark:shadow-lg dark:shadow-black/[0.03] sm:left-1/2 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:!-translate-x-1/2 sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="relative flex items-center justify-center h-3/4"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center w-full px-3 py-3 transition hover:text-gray-950 hover:scale-110 ",
                  { "text-gray-950": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 bg-green-100 rounded-full -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 340, damping: 40 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
