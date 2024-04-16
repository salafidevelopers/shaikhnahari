import React from 'react'
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import AudioRecitationCard from '../components/AudioRecitationCard'

export default function AudioRecitations() {
  return (
    <div className={`h-screen bg-[url('/assets/hero_bg.jpg')] bg-center bg-cover bg-no-repeat`}>
      <div className="text-primary-700 space-y-2 pt-16">
          <div className="flex justify-center space-x-2 items-center py-3">
            <span className="text-xs">
              اليوم : الأربعاء 28 فبراير 2024 ميلادى - 18 شعبان 1445 هجرى 
            </span>
            <FaRegCalendar />
          </div>
          <div className="flex justify-center items-center space-x-3">
            <span className="text-center text-xs">
               جديد أخبار الشيخ :جديد أخبار الشيخجديد أخبار الشيخجديد أخبار
              الشيخجديد أخبار الشيخجديد أخبار الشيخجديد
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
        </div>
        <div className="flex justify-center items-center py-7">
          <Image
            className="py-5 lg:py-0"
            src="/assets/logo.png"
            alt="Logo"
            width={400}
            height={100}
            priority
          />
        </div>
      
      <div className='absolute inset-x-0 top-3/4 md:top-1/2 flex mt-10 pt-10  justify-center flex-col px-10 space-y-10 bg-white w-full z-40'>
          <div className='flex justify-end items-center'>
              <div className='flex space-x-5 border-t-2 border-neutral-300 border-b-2'>
                  <div className='text-primary-700'>Audio recitations</div>
                  <div className='flex justify-center '>
                      <span className="text-primary-600">/</span>
                      <span className='px-5 text-primary-700'> Home </span>
                      <span className="text-primary-600">/</span>
                  </div>
              </div>
          </div>
          <AudioRecitationCard />
      </div>
    </div>
  )
}
