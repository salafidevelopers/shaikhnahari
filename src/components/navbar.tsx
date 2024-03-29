import React from 'react'
import { useRouter } from 'next/router';
import { IoCall } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { SlBookOpen } from "react-icons/sl";
import { HiSpeakerWave } from "react-icons/hi2";
import { GoHomeFill } from "react-icons/go";
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className='flex justify-center bg-white py-5'>
      <div className='flex items-center space-x-7 ring-1 ring-primary-400 p-3 rounded-md'>
        <Link className={router.pathname == "" ? "active" : ""} href="#">
          <div className='flex text-black items-center space-x-2  hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300'>
            <span className='text-black'>اتصل بنا</span>
            <IoCall />
          </div>
        </Link>
        <Link className={router.pathname == "" ? "active" : ""} href="#">
          <div className='flex items-center space-x-2 text-black  hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300'>
            <IoIosArrowDown />
            <span> حول الشيخ</span>
          </div>
        </Link>
        <Link className={router.pathname == "/articles" ? "active" : ""} href="./articles">
          <div className='flex items-center space-x-2 text-black  hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300'>
            <span>مقالات-الشيخ</span>
            <SlBookOpen />
          </div>
        </Link>
        <Link className={router.pathname == "/audios" ? "active" : ""} href="./audios">
          <div className='flex items-center space-x-2 text-black hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300'>
            <span> صوتيات الموقع</span>
            <HiSpeakerWave />
          </div>
        </Link>
        <Link className={router.pathname == "/" ? "active" : ""} href="./">
          <div className={`flex items-center space-x-2 text-black`}>
            <span> الرئيسية</span>
            <GoHomeFill />
          </div>
        </Link>  
      </div>
    </nav>
  )
}
