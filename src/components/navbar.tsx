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
    {
      label: t("navdropdowns.scientific-explanations"),
      link: "/scientific_explanation",
    },
    {
      label: t("navdropdowns.lecture_meetings"),
      link: "/lecture_and_meetings",
    },
    { label: t("navdropdowns.sermons_khutba"), link: "/sermons_khutba" },
    {
      label: t("navdropdowns.clips & questions"),
      link: "/clips_and_questions",
    },
    { label: t("navdropdowns.lessons"), link: "/lessons" },
    { label: t("navdropdowns.audio_recitations"), link: "/audio_recitations" },
  ];
  const recordingOptions = [
    { label: t("navdropdowns.biography"), link: "/biography" },
    { label: t("navdropdowns.news"), link: "/#" },
    { label: t("navdropdowns.books"), link: "/books_khotab" },
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
          href="/articles"
        >
          <div className="flex items-center gap-2 text-black  duration-300 ease-in-out hover:rounded-md hover:bg-gray-100 hover:p-2 hover:transition-all">
            <SlBookOpen />
            <span className="text-sm sm:text-xs">{t("navbar.articles")}</span>
          </div>
        </Link>
        <div>
          <RecordingsDropdown options={recordingOptions} />
        </div>
        <Link className={router.pathname == "" ? "active" : ""} href="/contact">
          <div className="flex items-center gap-2 text-black duration-300 ease-in-out hover:rounded-md hover:bg-gray-100 hover:p-2 hover:transition-all">
            <IoCall />
            <span className="text-sm text-black sm:text-xs">
              {t("navbar.contact")}
            </span>
          </div>
        </Link>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
