import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FaRegCalendar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  return (
    <div className="h-sreen ">
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 font-alexandria bg-[url('/assets/hero_bg.jpg')] bg-center bg-cover bg-no-repeat`}
      >
        <div className="flex flex-col items-center justify-between pb-4 lg:pb-8 lg:pt-16 h-screen">
          <div className="text-primary-700 space-y-1 lg:space-y-3">
            <div className="flex justify-center lg:space-x-2 items-center py-3">
              <span className="text-xs">اليوم : الأربعاء 28 فبراير 2024 ميلادى - 18 شعبان 1445 هجرى </span>
              <FaRegCalendar />
            </div>
            <div className="flex justify-center items-center lg:space-x-3">
              <span className="text-center text-xs"> جديد أخبار الشيخ :جديد أخبار الشيخجديد أخبار الشيخجديد أخبار الشيخجديد أخبار الشيخجديد أخبار الشيخجديد
                      <br/> أخبار الشيخجديد أخبار الشيخجديد أخبار الشيخ
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>

            </div>
          </div>
          <div className="">
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              className="py-5 lg:py-0"
              src="/assets/logo.png"
              alt="Next.js Logo"
              width={400}
              height={100}
              priority
            />
          </div>

          <div className="w-full rounded-full bg-white flex justify-between px-3 py-1 ">
            <input type="text" className="text-xs outline-none w-full text-primary-700" placeholder="Enter text here" />
            <span className="bg-primary-700 rounded-full px-3 py-1 ring-1 ring-primary-400"><button className="text-xs px-3 cursor-pointer tracking-wide">search</button></span>
          </div>

          <div className="bg-primary-10 rounded-md mb-3 my-5 lg:my-0 justify-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 bg-gradient-to-b from-gray-30 via-primary-40 to-primary-40">
            <h2 className={` text-center text-xs text-primary-800 lg:leading-5 leading-4 py-4 lg:py-7 px-2 lg:px-3`}>
              هذه ترجمةٌ مختصرةٌ عَنْ شَيْخِنَا الشيخ عَبْدُ الله بْنُ عَبْد
              الرَّحِيْمِ بْنِ حُسْيَن بْنِ مَحْمُودٍ السَّعديُّ ثُمَّ البُخاريُّ
              <br /> المدينيُّ 
              نسبةً إلى بني سعدٍ من الطَّائف لَمَّا رأيتُ سُؤال عَددٍ من
              الإخوةِ راغبين فِي معرفة ترجمةٍ عن الشيخِ وهي عبارة عن 
              <br/> أسئلةٍ وجَّهتها 
              إليه بعد استئذانه و قبوله حفظه الله.
            </h2>
            <div className="flex justify-center mb-3">
              <button className="space-x-2 cursor-pointer flex items-center bg-primary-700 px-2 py-1 rounded-md"><span>المزيد</span> <FaArrowRight /></button>
            </div>
          </div>

          <div className="flex py-4 lg:py-0 justify-center space-x-3 text-primary-700">
            <span><FaFacebookSquare /></span>
            <span><AiOutlineMail /></span>
            <span><BsTwitterX /></span>
          </div>
        </div>
      </main>
    </div>
  );
}
