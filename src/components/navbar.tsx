import React from "react";
import { useRouter } from "next/router";
import { IoCall } from "react-icons/io5";
import { SlBookOpen } from "react-icons/sl";
import { GoHomeFill } from "react-icons/go";
import Link from "next/link";
import Dropdown from "./AudioDropDown";
import RecordingsDropdown from "./RecordingDropdown";

export default function Navbar() {
  const router = useRouter();
  const options = [
    { label: "Scientific explanation", link: "/scientific_explanation" },
    { label: "Lecture and meetings", link: "/lecture_and_meetings" },
    { label: "Clips and questions", link: "/clips_and_questions" },
    { label: "Translated lessons", link: "/translated_lessons" },
    { label: "Audio recitations", link: "/audio_recitations" },
  ];
  const recordingOptions = [
    { label: "ترجمة الشيخ", link: "/#" },
    { label: "أخبار-الشيخ", link: "/#" },
    { label: "الكتب", link: "/#" },
  ];

  return (
    <nav className="flex font-alexandria justify-center items-center bg-white py-3">
      <div className="flex items-center space-x-3 lg:space-x-7 ring-1 ring-primary-400 p-3 rounded-md">
        <Link className={router.pathname == "" ? "active" : ""} href="#">
          <div className="flex text-black items-center space-x-1 lg:space-x-2  hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300">
            <span className="text-black text-xs lg:text-sm">اتصل بنا</span>
            <IoCall />
          </div>
        </Link>
        <div>
          <RecordingsDropdown options={recordingOptions} />
        </div>
        <Link
          className={router.pathname == "/articles" ? "active" : ""}
          href="./articles"
        >
          <div className="flex items-center space-x-1 lg:space-x-2 text-black  hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300">
            <span className="text-xs lg:text-sm font-mono">مقالات-الشيخ</span>
            <SlBookOpen />
          </div>
        </Link>
        <div>
          <Dropdown options={options} />
        </div>
        <Link className={router.pathname == "/" ? "active" : ""} href="./">
          <div
            className={`flex items-center space-x-1 lg:space-x-2 text-black`}
          >
            <span className="text-xs lg:text-sm"> الرئيسية</span>
            <GoHomeFill />
          </div>
        </Link>
      </div>
    </nav>
  );
}
