import React from "react";
import { useRouter } from "next/router";
import { IoCall } from "react-icons/io5";
import { SlBookOpen } from "react-icons/sl";
import { GoHomeFill } from "react-icons/go";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import Dropdown from "./AudioDropDown";
import RecordingsDropdown from "./RecordingDropdown";
import { alexandria } from "@/utils";
import LocaleSwitcher from "./localeSwitcher";

export default function Navbar() {
  const router = useRouter();
  const { t, lang } = useTranslation("index");

  const options = [
    { label: "شروحات علمية", link: "/scientific_explanation" },
    { label: "محاضرات ولقاءات", link: "/lecture_and_meetings" },
    { label: "خطب", link: "/books_khotab" },
    { label: "مقاطع وأسئلة", link: "/clips_and_questions" },
    { label: "دروس مترجمة", link: "/lessons" },
    { label: "تلاوات صوتية", link: "/audio_recitations" },
    { label: "Audio recitations", link: "/AudioRecitations" },
  ];
  const recordingOptions = [
    { label: "ترجمة الشيخ", link: "/biography" },
    { label: "أخبار-الشيخ", link: "/#" },
    { label: "الكتب", link: "/#" },
  ];

  return (
    <nav
      className={`flex  items-center justify-center bg-white py-3 ${alexandria.className}`}
    >
      <div className="flex items-center gap-7 rounded-md  p-3 ring-1 ring-primary-400 md:gap-4">
        <Link className={router.pathname == "/" ? "active" : ""} href="/">
          <div className={`flex items-center  gap-2 text-black`}>
            <GoHomeFill />
            <span className="text-sm sm:text-xs">{t("navbar.home")}</span>
          </div>
        </Link>
        <div>
          <Dropdown options={options} />
        </div>
        <Link
          className={router.pathname == "/articles" ? "active" : ""}
          href="./articles"
        >
          <div className="flex items-center gap-2 text-black  duration-300 ease-in-out hover:rounded-md hover:bg-gray-100 hover:p-2 hover:transition-all">
            <SlBookOpen />
            <span className="text-sm sm:text-xs">مقالات-الشيخ</span>
          </div>
        </Link>
        <div>
          <RecordingsDropdown options={recordingOptions} />
        </div>
        <Link className={router.pathname == "" ? "active" : ""} href="/contact">
          <div className="flex items-center gap-2 text-black duration-300 ease-in-out hover:rounded-md hover:bg-gray-100 hover:p-2 hover:transition-all">
            <IoCall />
            <p className="text-sm text-black sm:text-xs">اتصل بنا</p>
          </div>
        </Link>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
