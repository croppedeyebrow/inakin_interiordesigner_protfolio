"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function SectionDivider() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTopPosition = (index: number) => {
    const position = (index + 1) * 12.5; // 8개의 바를 균등하게 배치
    const adjustedPosition = Math.min(position + scrollY / 10, 100); // 기존 위치 계산
    return `${100 - adjustedPosition}%`; // 위치 반전
  };

  const getVerticalHeight = () => {
    const height = Math.min(100 + scrollY / 10, 200); // 최대 높이를 200%로 제한
    return `${200 - height}%`; // 높이 반전
  };

  return (
    <motion.div
      className="flex justify-center items-center h-96 bg-gray-100 pt-24"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div className="relative h-96 w-24">
        {/* Left vertical bar */}
        <div
          className="absolute left-0 top-0 w-2 bg-gray-800  transition-all duration-500"
          style={{ height: getVerticalHeight() }}
        ></div>
        {/* Right vertical bar */}
        <div
          className="absolute right-0 top-0 w-2 bg-gray-800  transition-all duration-500"
          style={{ height: getVerticalHeight() }}
        ></div>
        {/* Horizontal bars */}
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="absolute left-0 w-full h-2 bg-green-800  transition-all duration-500"
            style={{ top: getTopPosition(index) }}
          ></div>
        ))}
      </div>
    </motion.div>
  );
}
