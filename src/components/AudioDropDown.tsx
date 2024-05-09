import { useState } from "react";
import Link from "next/link";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { Translate } from "next-translate";
import { IconType } from "react-icons";
import { cn } from "@/utils";

interface Option {
  label: React.ReactNode;
  link: string;
}

interface DropdownProps {
  options: Option[];
  rightIcon?: boolean;
  leftIcon?: IconType;
  title: Translate;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  options,
  rightIcon,
  leftIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={cn("dropdown")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="dropdown-toggle flex items-center gap-2 space-x-1 text-black duration-300 ease-in-out hover:rounded-md hover:bg-gray-100 hover:p-2 hover:transition-all lg:space-x-2">
        {rightIcon && <HiSpeakerWave />}
        <span>{`${title}`}</span>
        <IoIosArrowDown />
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
