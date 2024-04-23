import React from "react";
import AudioRecitationCard from "../components/AudioRecitationCard";
import SecondaryHero from "@/components/SecondaryHero";
import { useBreadCrumbs } from "@/components/BreadCrumb/breadcrumbs-context";
import { usePathname } from "next/navigation";
import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import { Spinner } from "@/components/spinner";

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
  // useBreadCrumbs("Audio Recitations");
  const paths = usePathname();

  const pathNames = paths.split("/").filter((path) => path);
  const pathItems = pathNames.map((path, i) => ({
    name: path,
    path: pathNames.slice(0, i + 1).join("/"),
  }));
  return (
    <div>
      <SecondaryHero />

      <div className="flex flex-grow justify-center flex-col px-10">
        <div className="flex justify-end items-center my-4">
          <BreadcrumbsContainer>
            <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
            {pathItems.map((item) => (
              <BreadcrumbsItem key={item.path} href={`/${item.path}`}>
                {item.name === "loading" ? (
                  <Spinner className="w-4 h-4" />
                ) : (
                  item.name
                )}
              </BreadcrumbsItem>
            ))}
          </BreadcrumbsContainer>
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
    </div>
  );
};

export default AudioRecitations;
