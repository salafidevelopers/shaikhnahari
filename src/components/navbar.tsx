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
    { label: "ترجمة الشيخ", link: "/#" },
    { label: "أخبار-الشيخ", link: "/#" },
    { label: "الكتب", link: "/#" },
  ];

  return (
    <nav
      className={`flex  justify-center items-center bg-white py-3 ${alexandria.className}`}
    >
      <div className="flex items-center gap-7 md:gap-4  ring-1 ring-primary-400 p-3 rounded-md">
        <Link className={router.pathname == "/" ? "active" : ""} href="/">
          <div className={`flex items-center  text-black gap-2`}>
            <GoHomeFill />
            <span className="sm:text-xs text-sm">{t("navbar.home")}</span>
          </div>
        </Link>
        <div>
          <Dropdown options={options} />
        </div>
        <Link
          className={router.pathname == "/articles" ? "active" : ""}
          href="./articles"
        >
          <div className="flex items-center gap-2 text-black  hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300">
            <SlBookOpen />
            <span className="sm:text-xs text-sm">مقالات-الشيخ</span>
          </div>
        </Link>
        <div>
          <RecordingsDropdown options={recordingOptions} />
        </div>
        <Link className={router.pathname == "" ? "active" : ""} href="#">
          <div className="flex text-black items-center gap-2 hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300">
            <IoCall />
            <span className="text-black sm:text-xs text-sm">اتصل بنا</span>
          </div>
        </Link>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
