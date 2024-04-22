import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdTranslate } from "react-icons/md";
import { cn } from "@/utils";

const LocaleSwitcher = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const [isListOpen, setIsListOpen] = useState(false);

  console.log({ locales, locale });

  const onChangeLanguage = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <div>
      <div className="inline-flex bg-white hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300 ">
        <button
          onClick={onChangeLanguage}
          className="flex items-center gap-1 rounded-l-md  hover:text-gray-700 sm:text-xs text-sm "
        >
          <MdTranslate /> {locale === "ar" ? "العربية" : "English"}
        </button>
        <div className="relative">
          <button
            onClick={onChangeLanguage}
            type="button"
            className="inline-flex h-full items-center justify-center rounded-md px-1 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={cn(
              "absolute z-10 w-56 mt-3 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg text-start",
              isListOpen ? "block" : "hidden"
            )}
          >
            <div className="p-2" aria-labelledby="dropdown">
              {locales!.map((loc) => (
                <Link
                  //   activeClassName={locale === loc}
                  href={asPath}
                  locale={loc}
                  key={loc}
                >
                  <span className="block content-start rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    {loc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocaleSwitcher;
