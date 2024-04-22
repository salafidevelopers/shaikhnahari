import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

export const Footer = () => {
  const { t } = useTranslation("index");

  return (
    <div className="p-6 space-y-3 ">
      <div className="flex bg-[#54310A] rounded-md">
        <div className=" p-6 space-y-6">
          <h1 className="text-white font-semibold text-3xl">
            {t("footer.mail")}
          </h1>
          <div className="flex gap-2 ">
            <input
              type="text"
              placeholder="`{t(footer.placeholder)}`"
              className="p-2 rounded-md pr-[700px]"
            />
            <div className=" bg-[#F5D4AE] rounded-md flex gap-1 items-center px-2">
              <p> {t("footer.subscribe")}</p>
              <CiMail size={30} />
            </div>
          </div>
        </div>
        <Image
          src={require("../../public/assets/opened_envelope.png")}
          alt=""
          className="w-32"
        />
      </div>
      <div className=" space-y-3">
        <div className="flex gap-4">
          <ImFacebook2 size={30} />
          <CiMail size={30} />
          <FaXTwitter size={30} />
        </div>
        <p> {t("footer.copyright")}</p>
      </div>
    </div>
  );
};
