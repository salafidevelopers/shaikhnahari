import React from "react";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";
import AudioRecitationCard from "../components/AudioRecitationCard";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import Footer from "../components/Footer";
import SecondaryHero from "@/components/SecondaryHero";

type AudioRecitationCard = {
  sys: {
    id: string;
  };
};

type Props = {
  cardUi?: AudioRecitationCard[]; // Make cardUi optional
};

const dummyData: AudioRecitationCard[] = [
  { sys: { id: "1" } },
  { sys: { id: "2" } },
  { sys: { id: "3" } },
  { sys: { id: "4" } },
  { sys: { id: "5" } },
  { sys: { id: "6" } },
];

const AudioRecitations: React.FC<Props> = ({ cardUi = dummyData }) => {
  return (
    <div>
      <SecondaryHero />
      <div className="flex flex-grow justify-center flex-col px-10">
        <div className="flex justify-end items-center my-4">
          <div className="flex space-x-5 border-t-2 border-neutral-300 border-b-2">
            <div className="text-primary-700">Audio recitations</div>
            <div className="flex justify-center ">
              <span className="text-primary-600">/</span>
              <span className="px-5 text-primary-700"> Home </span>
              <span className="text-primary-600">/</span>
            </div>
          </div>
        </div>
        <section className="audioCards ">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
            {cardUi.map((audioCard) => (
              <div key={audioCard.sys.id}>
                <AudioRecitationCard />
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="px-10 bg-white">
        <Footer />
        <div className="">
          <div className="flex items-center text-lg space-x-3 text-primary-800 pb-1">
            <span>
              <FaFacebookSquare />
            </span>
            <span>
              <AiOutlineMail />
            </span>
            <span>
              <BsTwitterX />
            </span>
          </div>
          <span className="text-primary-800 text-sm">
            All rights reserved to the site - 1436 AH
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioRecitations;
