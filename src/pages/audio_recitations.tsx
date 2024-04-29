import React from "react";
import AudioRecitationCard from "../components/AudioRecitationCard";
import SecondaryHero from "@/components/SecondaryHero";
import { usePathname } from "next/navigation";
import { BreadcrumbsContainer, BreadcrumbsItem } from "@/components/BreadCrumb";
import { Spinner } from "@/components/spinner";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { useRouter } from "next/router";

type AudioRecitationCard = {
  id: string;
  title: string;
  url: string;
};

type Props = {
  cardUi?: AudioRecitationCard[]; // Make cardUi optional
};

const dummyData: AudioRecitationCard[] = [
  {
    id: "1",
    title: "تلاوة سورة الشرح",
    url: "/assets/audios/tilawat_sh_bukhary_094_surat_ash_sharh.mp3",
  },
  { id: "2", title: "سورة الفاتحة", url: "/assets/audios/Al-Fatihah.mp3" },
  {
    id: "3",
    title: "تلاوة من سورة آل عمران من الآية 92 إلى الآية 102",
    url: "/assets/audios/ali_imran_92-02.mp3",
  },
  {
    id: "4",
    title: " تلاوة من سورة الإسراء من الآية 9 إلى الآية 21",
    url: "/assets/audios/al_isra_9-21.mp3",
  },
];

const AudioRecitations: React.FC<Props> = ({ cardUi = dummyData }) => {
  const router = useRouter();
  // Get the slug from the pathname
  const { slug } = router.query;

  const paths = usePathname();
  // Decode the URL-encoded path to display proper names in breadcrumbs
  const decodedPaths = decodeURIComponent(paths);

  const { pathItems, getCustomBreadcrumbName } = useBreadcrumb(decodedPaths);

  const customBreadcrumbNames: Record<string, JSX.Element> = {
    loading: <Spinner className="h-4 w-4" />,
    audio_recitations: <span>Audio Recitations</span>,

    // Add more custom mappings here if needed
  };

  return (
    <div>
      <SecondaryHero />
      <div className="flex flex-grow flex-col justify-center px-14 md:px-10">
        <div className="my-4 flex items-center">
          <BreadcrumbsContainer>
            <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
            {pathItems.map((item) => (
              <BreadcrumbsItem key={item.path} href={`/${item.path}`}>
                {getCustomBreadcrumbName(item.name, customBreadcrumbNames)}
              </BreadcrumbsItem>
            ))}
          </BreadcrumbsContainer>
        </div>
        <section className="audioCards">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
            {cardUi.map((recitation) => (
              <div key={recitation.id}>
                <AudioRecitationCard
                  title={recitation.title}
                  url={recitation.url}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AudioRecitations;
