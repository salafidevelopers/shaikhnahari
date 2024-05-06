import { alexandria } from "@/utils";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  const { t, lang } = useTranslation("index");
  return (
    <footer className={`px-14 md:px-10 ${alexandria.className}`}>
      <div className="my-10 rounded-md bg-primary-800 p-5 pb-0">
        <p className="flex text-3xl text-white md:text-xl sm:text-sm">القائمة البريدية</p>
        <div className="flex space-x-0">
          <div className="z-40 flex w-full items-center gap-2">
            <input
              className="w-full p-3 text-xs text-primary-800 outline-none md:p-2"
              placeholder="ادخل بريدك الألكتروني"
            />
            <button className="flex items-center gap-2 rounded-sm bg-primary-300 p-2 text-sm md:space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#844e10"
                className="h-6 w-6 md:h-3 md:w-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p className="text-xs text-primary-700 md:text-sm">اشترك</p>
            </button>
          </div>
          <Image
            src="/assets/footer_envolope.png"
            alt="envelope"
            
            width={100}
            height={50}
            className="md:w-16"
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center gap-3 pb-1 text-lg text-primary-800">
          <FaFacebookSquare />
          <AiOutlineMail />
          <BsTwitterX />
        </div>
        <p className="text-sm text-primary-800">
          {t("footer.copyright")} 1436 AH
        </p>
      </div>
    </footer>
  );
}
