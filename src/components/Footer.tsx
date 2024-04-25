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
    <footer className={`px-10 ${alexandria.className} `}>
      <div className="bg-primary-800 p-5 pb-0 my-10 rounded-md">
        <p className="flex text-white text-3xl">القائمة البريدية</p>
        <div className="flex space-x-0">
          <div className="flex items-center z-40 gap-2 w-full">
            <input
              className="outline-none text-primary-800 text-xs md:p-2 p-3 w-full"
              placeholder="ادخل بريدك الألكتروني"
            />
            <button className="flex md:space-x-1 gap-2 bg-primary-300 text-sm rounded-sm p-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#844e10"
                className="md:w-3 md:h-3 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p className="text-xs md:text-sm text-primary-700">اشترك</p>
            </button>
          </div>
          <Image
            src="/assets/footer_envolope.png"
            alt="envelope"
            width={100}
            height={50}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center text-lg gap-3 text-primary-800 pb-1">
          <FaFacebookSquare />
          <AiOutlineMail />
          <BsTwitterX />
        </div>
        <p className="text-primary-800 text-sm">
          {t("footer.copyright")} 1436 AH
        </p>
      </div>
    </footer>
  );
}
