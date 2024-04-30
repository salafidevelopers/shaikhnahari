import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

interface recordingOptions {
  label: React.ReactNode;
  link: string;
}

interface RecordingsDropdownProps {
  options: recordingOptions[];
}

const RecordingsDropdown: React.FC<RecordingsDropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseClick = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const router = useRouter();
  const { t, lang } = useTranslation("index");

  return (
    <div
      className="dropdown"
      onClick={handleMouseClick}
      onMouseLeave={handleMouseLeave}
    >
      <button className="dropdown-toggle">
        <span className="flex items-center gap-2 text-black duration-300 ease-in-out hover:rounded-md hover:bg-gray-100 hover:p-2 hover:transition-all">
          <span className="text-sm md:text-xs">{t("navbar.about-sheikh")}</span>
          <IoIosArrowDown />
        </span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <Link href={option.link} key={index}>
              <div className="dropdown-item">{option.label}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecordingsDropdown;
