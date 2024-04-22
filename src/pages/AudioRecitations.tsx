import React from 'react';
import Image from 'next/image';
import { FaRegCalendar } from 'react-icons/fa';
import AudioRecitationCard from '../components/AudioRecitationCard';
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import Footer from '../components/Footer';

type AudioRecitationCard = {
  sys: {
    id: string;
  };
};

type Props = {
  cardUi?: AudioRecitationCard[]; // Make cardUi optional
};

const dummyData: AudioRecitationCard[] = [
  { sys: { id: '1' } },
  { sys: { id: '2' } },
  { sys: { id: '3' } },
  { sys: { id: '4' } },
  { sys: { id: '5' } },
  { sys: { id: '6' } },
];

const AudioRecitations: React.FC<Props> = ({ cardUi = dummyData }) => {
  return (
    <div className={`h-screen bg-[url('/assets/hero_bg.jpg')] bg-center bg-cover bg-no-repeat flex flex-col`}>
      <div className="text-primary-700 space-y-4 pt-16">
        <div className="flex justify-center space-x-2 items-center py-3">
          <span className="text-xs">
            اليوم : الأربعاء 28 فبراير 2024 ميلادى - 18 شعبان 1445 هجرى
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
      <div className="flex-grow inset-x-0 top-2/4 md:top-2/3 flex mt-10 pt-10  justify-center flex-col px-10 space-y-10 bg-white ">
        <div className="flex justify-end items-center">
          <div className="flex space-x-5 border-t-2 border-neutral-300 border-b-2">
            <div className="text-primary-700">Audio recitations</div>
            <div className="flex justify-center ">
              <span className="text-primary-600">/</span>
              <span className="px-5 text-primary-700"> Home </span>
              <span className="text-primary-600">/</span>
            </div>
          </div>
        </div>
        <div className="audioCards ">
          <div className='space-y-2 md:grid md:grid-cols-2 space-x-2'>
            {cardUi.map((audioCard) => (
              <div key={audioCard.sys.id}>
                <AudioRecitationCard />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='px-10 bg-white'>
        <Footer />
        <div className=''>
          <div className='flex items-center text-lg space-x-3 text-primary-800 pb-1'>
            <span>
              <FaFacebookSquare />
            </span>
            <span>
              <AiOutlineMail />
            </span>
            <span>
              <BsTwitterX />
            </span>
          </div>
          <span className='text-primary-800 text-sm'>All rights reserved to the site - 1436 AH</span>
        </div>
      </div>
    </div>
  );
};

export default AudioRecitations;
