import { useState } from "react";
import Link from "next/link";
import { HiSpeakerWave } from "react-icons/hi2";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";


interface Option {
  label: React.ReactNode;
  link: string;
}

interface DropdownProps {
  options: Option[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="dropdown-toggle">
        <span className="flex items-center gap-2 space-x-1 lg:space-x-2 text-black hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300">
          <HiSpeakerWave />
          <span className="md:text-xs sm:text-sm">{t("navbar.audio-recitations")}</span>
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

export default Dropdown;
