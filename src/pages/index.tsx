import AudioCard from "@/components/AudioCard";
import Hero from "@/components/hero";
import AudioRecitations from "./AudioRecitations";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="px-10 m-6">
        <section className="my-5 p-3 bg-white shadow-md border border-primary-200">
          <div className="flex mb-4 justify-between items-center">
            <span>جديد الشروحات العلمية:</span>
            <button className="border border-x-2 py-2  flex gap-3 px-3 bg-primary-700 text-white rounded-lg  items-center">
              <span className="text-sm px-1">See more</span>
            </button>
          </div>
          <div className="space-y-4">
            <AudioCard size="lg" />
            <AudioCard size="lg" />
            <AudioCard size="lg" />
            <AudioCard size="lg" />
          </div>
        </section>

        <section className="my-5 grid grid-cols-3 gap-3 bg-white">
          <div className="space-y-4 p-3 shadow-md border border-primary-200 ">
            <AudioCard size="sm" />
            <AudioCard size="sm" />
            <AudioCard size="sm" />
            <AudioCard size="sm" />
          </div>
          <div className="space-y-4 p-3 shadow-md border border-primary-200">
            <AudioCard size="sm" />
            <AudioCard size="sm" />
            <AudioCard size="sm" />
            <AudioCard size="sm" />
          </div>
          <div className="space-y-4 p-3 shadow-md border border-primary-200">
            <AudioCard size="sm" />
            <AudioCard size="sm" />
            <AudioCard size="sm" />
            <AudioCard size="sm" />
          </div>
        </section>

        <section className="p-5">
          <div className="space-y-4">
            <AudioCard size="lg" />
            <AudioCard size="lg" />
            <AudioCard size="lg" />
            <AudioCard size="lg" />
          </div>
        </section>
      </div>
    </>
  );
}
