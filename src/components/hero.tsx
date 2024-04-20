import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

const Hero = () => {
  return (
    <div
      className={`flex flex-col h-full items-center justify-between p-24  bg-[url('/assets/hero_bg.jpg')] bg-center bg-cover bg-no-repeat`}
    >
      <div className="flex flex-col items-center justify-between lg:pb-8 lg:pt-16 gap-4">
        <div className="text-primary-700 space-y-3">
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
        <div className="">
          <Image
            className="py-5 lg:py-0"
            src="/assets/logo.png"
            alt="Logo"
            width={400}
            height={100}
            priority
          />
        </div>

        <div className="w-full rounded-full bg-white flex justify-between px-3 py-1 mb-3">
          <input
            type="text"
            className="text-xs outline-none w-full text-primary-700"
            placeholder="Enter text here"
          />

          <button className="bg-primary-700 rounded-full px-3 py-2 ring-1 ring-primary-400 text-white text-xs cursor-pointer tracking-wide">
            search
          </button>
        </div>

        <div className="bg-primary-10 rounded-md mb-3 justify-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 bg-gradient-to-b from-gray-30 via-primary-40 to-primary-40">
          <h2
            className={` text-center text-xs text-primary-800 leading-5 py-7 px-3`}
          >
            هذه ترجمةٌ مختصرةٌ عَنْ شَيْخِنَا الشيخ عَبْدُ الله بْنُ عَبْد
            الرَّحِيْمِ بْنِ حُسْيَن بْنِ مَحْمُودٍ السَّعديُّ ثُمَّ البُخاريُّ
            <br /> المدينيُّ نسبةً إلى بني سعدٍ من الطَّائف لَمَّا رأيتُ سُؤال
            عَددٍ من الإخوةِ راغبين فِي معرفة ترجمةٍ عن الشيخِ وهي عبارة عن
            <br /> أسئلةٍ وجَّهتها إليه بعد استئذانه و قبوله حفظه الله.
          </h2>
          <div className="flex justify-center mb-3">
            <button className="space-x-2 cursor-pointer flex items-center text-white bg-primary-700 px-2 py-1 rounded-md">
              <span>المزيد</span> <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-3 text-primary-700">
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
      </div>
    </div>
  );
};

export default Hero;
