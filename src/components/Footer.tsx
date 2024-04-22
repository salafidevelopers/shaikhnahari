import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-primary-800 p-5 pb-0 my-10 rounded-md">
        <span className="flex justify-end">القائمة البريدية</span>
        <div className="flex space-x-0">
          <Image
            src="/assets/footer_envolope.png"
            alt="envelope"
            width={100}
            height={50}
          />
          <div className="flex items-center z-40 space-x-2 w-full">
            <div className="flex space-x-1 md:space-x-2 bg-primary-300 text-sm rounded-sm p-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#844e10"
                className="w-3 h-3 md:w-6 md:h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <span className="text-xs md:text-sm text-primary-700">اشترك</span>
            </div>
            <input
              className="outline-none text-primary-800 text-xs p-2 md:p-3 w-full"
              placeholder="ادخل بريدك الألكتروني"
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
