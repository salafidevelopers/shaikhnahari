import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Link from "next/link";

const Hero = () => {
  const router = useRouter();
  const { t, lang } = useTranslation("index");

  return (
    <div
      className={`flex h-full flex-col items-center justify-between bg-[url('/assets/hero_bg.jpg')]  bg-cover bg-center bg-no-repeat p-24`}
    >
      <div className="flex flex-col items-center justify-between gap-4 lg:pb-8 lg:pt-16">
        <div className="space-y-3 text-primary-700 sm:py-14 py-0">
          <div className="flex items-center justify-center gap-3 py-3">
            <FaRegCalendar />
            <p className="text-xs">
              اليوم : الأربعاء 28 فبراير 2024 ميلادى - 18 شعبان 1445 هجرى 
            </p>
          </div>
          <div className="flex items-center justify-center  gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            <p className="text-center text-xs">
               جديد أخبار الشيخ :جديد أخبار الشيخجديد أخبار الشيخجديد أخبار
              الشيخجديد أخبار الشيخجديد أخبار الشيخجديد
              <br /> أخبار الشيخجديد أخبار الشيخجديد أخبار الشيخ
            </p>
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

        <div className="mb-3 sm:flex sm:flex-col flex w-full justify-between sm:space-y-5 rounded-full sm:bg-transparent bg-white px-3 py-1">
          <input
            type="text"
            className=" text-xs text-primary-700 outline-none sm:h-[40px] sm:rounded-full sm:px-5"
            placeholder={t("navbar.search placeholder")}
          />
          <button className="cursor-pointer rounded-full bg-primary-700 px-10 py-2 text-xs tracking-wide text-white ring-1 ring-primary-400">
            Search
          </button>
        </div>
        <div className="bg-primary-10 mb-3 justify-center rounded-md bg-gradient-to-b from-gray-30 via-primary-40 to-primary-40 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4">
          <h2
            className={`px-3 py-7 text-center text-xs leading-5 text-primary-800`}
          >
            هذه ترجمةٌ مختصرةٌ عَنْ شَيْخِنَا الشيخ عَبْدُ الله بْنُ عَبْد
            الرَّحِيْمِ بْنِ حُسْيَن بْنِ مَحْمُودٍ السَّعديُّ ثُمَّ البُخاريُّ
            <br /> المدينيُّ نسبةً إلى بني سعدٍ من الطَّائف لَمَّا رأيتُ سُؤال
            عَددٍ من الإخوةِ راغبين فِي معرفة ترجمةٍ عن الشيخِ وهي عبارة عن
            <br /> أسئلةٍ وجَّهتها إليه بعد استئذانه و قبوله حفظه الله.
          </h2>
          <Link href="/biography" className="mb-3 flex justify-center">
            <button className="flex cursor-pointer items-center gap-2 rounded-md bg-primary-700 px-2 py-1 text-white">
              <FaArrowRight /> <span>{t("home.hero.more")}</span>
            </button>
          </Link>
        </div>

        <div className="gap- flex justify-center gap-3 text-primary-700">
          <BsTwitterX />

          <AiOutlineMail />

          <FaFacebookSquare />
        </div>
      </div>
    </div>
  );
};

export default Hero;
