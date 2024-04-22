import Image from "next/image";
import React from "react";
import { FaRegCalendar } from "react-icons/fa";

const SecondaryHero = () => {
  return (
    <div className="bg-center bg-cover bg-no-repeat bg-[url('/assets/hero_bg.jpg')] text-primary-700 space-y-4 pt-16 pb-10">
      <div className="flex justify-center space-x-2 items-center py-3">
        <span className="text-xs">
          اليوم : الأربعاء 28 فبراير 2024 ميلادى - 18 شعبان 1445 هجرى
        </span>
        <FaRegCalendar />
      </div>
      <div className="flex justify-center items-center space-x-3">
        <span className="text-center text-xs">
          جديد أخبار الشيخ :جديد أخبار الشيخجديد أخبار الشيخجديد أخبار الشيخجديد
          أخبار الشيخجديد أخبار الشيخجديد
          <br /> أخبار الشيخجديد أخبار الشيخجديد أخبار الشيخ
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="py-5"
          src="/assets/logo.png"
          alt="Logo"
          width={400}
          height={100}
          priority
        />
      </div>
    </div>
  );
};

export default SecondaryHero;
