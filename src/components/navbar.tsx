import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoCall } from "react-icons/io5";
import { SlBookOpen } from "react-icons/sl";
import { GoHomeFill } from "react-icons/go";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { alexandria } from "@/utils";
import Dropdown from "./AudioDropDown";
import RecordingsDropdown from "./RecordingDropdown";
import LocaleSwitcher from "./localeSwitcher";

export default function Navbar() {
  const router = useRouter();
  const { t, lang } = useTranslation("index");
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={`flex items-center justify-center bg-white py-3 ${alexandria.className}`}
      id="desktop"
    >
      <div className={isMobile ? "hidden" : "flex justify-center items-center gap-7 rounded-md p-3 ring-1 ring-primary-400 md:gap-4"}>
        <Link className={router.pathname == "/" ? "active" : ""} href="/">
          <div className={`flex items-center gap-2 text-black`}>
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
          <div className="flex items-center gap-2 text-black duration-300 ease-in-out hover:rounded-md hover:bg-gray-100 hover:p-2 hover:transition-all">
            <SlBookOpen />
            <span className="text-sm sm:text-xs">{t("navbar.articles")}</span>
          </div>
        </Link>
        <Link
          href="/about_sheikh/"
          className={router.pathname == "/about_sheikh" ? "active" : ""}
        >
          <div>
            <RecordingsDropdown options={recordingOptions} />
          </div>
        </Link>
        <Link
          className={router.pathname == "/contact" ? "active" : ""}
          href="/contact"
        >
          <div className="flex items-center gap-2 text-black duration-300 ease-in-out hover:rounded-md hover:bg-gray-100 hover:p-2 hover:transition-all">
            <IoCall />
            <span className="text-sm text-black sm:text-xs">
              {t("navbar.contact")}
            </span>
          </div>
        </Link>
        <LocaleSwitcher />
      </div>
      {/* Hamburger menu for mobile */}
      {isMobile && (
        <div className="">
          <button onClick={toggleMenu} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      )}
      {/* Mobile menu */}
      {showMenu && isMobile && (
        <div className=" flex flex-col items-center space-y-5 p-3 bg-white absolute top-14 ring-1 ring-primary-400 rounded-md z-50 text-xs">
          <Link  href="/" className={router.pathname == "/" ? "active" : ""}>
            <div className="flex items-center gap-2 text-black">
              <GoHomeFill />
              <span>{t("navbar.home")}</span>
            </div>
          </Link>
          <Dropdown options={options} />
          <Link href="/articles">
            <div className="flex gap-2 items-center text-black text-xs">
              <SlBookOpen />
              <span>{t("navbar.articles")}</span>
            </div>
          </Link>
          <Link href="/about_sheikh/">
            <div>
              <RecordingsDropdown options={recordingOptions} />
            </div>
          </Link>
          <Link href="/contact">
            <div className="flex items-center gap-2 text-black text-xs">
              <IoCall />
              <span>{t("navbar.contact")}</span>
            </div>
          </Link>
          <LocaleSwitcher />
        </div>
      )}
    </nav>
  );
}
