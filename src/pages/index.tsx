import AudioCard from "@/components/AudioCard";
import Hero from "@/components/hero";
import { audios } from "@/utils/data";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="my-6 px-14 md:px-10">
        <section className="my-5 rounded-md border border-primary-200 bg-white p-3 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <span>جديد الشروحات العلمية:</span>
            <button className="flex items-center gap-3  rounded-lg border border-x-2 bg-primary-700 px-3 py-2  text-white">
              <span className="px-1 text-sm">See more</span>
            </button>
          </div>
          <div className="space-y-4">
            {audios.map((audio) => (
              <AudioCard
                key={audio.id}
                size={"lg"}
                title={audio.title}
                audioUrl={audio.link}
              />
            ))}
          </div>
        </section>


        <section className="my-5 grid grid-cols-3 gap-3 rounded-md bg-white 2md:grid-cols-1">
          <div className=" rounded-md border border-primary-200 p-3 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <span>جديد الشروحات العلمية:</span>
              <button className="flex items-center gap-3  rounded-lg border border-x-2 bg-primary-700 px-3 py-2  text-white">
                <span className="px-1 text-sm">See more</span>
              </button>
            </div>
            <div className="space-y-4">
              {audios.map((audio) => (
                <AudioCard
                  key={audio.id}
                  size={"sm"}
                  title={audio.title}
                  audioUrl={audio.link}
                />
              ))}
            </div>
          </div>
          <div className=" rounded-md border border-primary-200 p-3 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <span>جديد الشروحات العلمية:</span>
              <button className="flex items-center gap-3 rounded-lg border border-x-2 bg-gray-700 px-3 py-2  text-white">
                <span className="px-1 text-sm">See more</span>
              </button>
            </div>
            <div className="space-y-4">
              {audios.map((audio) => (
                <AudioCard
                  key={audio.id}
                  size={"sm"}
                  title={audio.title}
                  audioUrl={audio.link}
                />
              ))}
            </div>
          </div>
          <div className=" rounded-md border border-primary-200 p-3 shadow-md">
            <div className="mb-4 flex  items-center justify-between">
              <span>جديد الشروحات العلمية:</span>
              <button className="flex items-center gap-3  rounded-lg border border-x-2 bg-primary-700 px-3 py-2  text-white">
                <span className="px-1 text-xs sm:text-sm">See more</span>
              </button>
            </div>
            <div className="space-y-4">
              {audios.map((audio) => (
                <AudioCard
                  key={audio.id}
                  size={"sm"}
                  title={audio.title}
                  audioUrl={audio.link}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="">
          <div className="space-y-3 rounded-md border border-primary-200 bg-white p-3 shadow-md">
            {audios.map((audio) => (
              <AudioCard
                key={audio.id}
                size={"lg"}
                title={audio.title}
                audioUrl={audio.link}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
