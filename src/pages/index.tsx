import AudioCard from "@/components/AudioCard";
import Hero from "@/components/hero";

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
            <AudioCard size="lg" />
            <AudioCard size="lg" />
            <AudioCard size="lg" />
            <AudioCard size="lg" />
          </div>
        </section>

        <section className="my-5 grid grid-cols-3 gap-3 rounded-md bg-white">
          <div className=" rounded-md border border-primary-200 p-3 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <span>جديد الشروحات العلمية:</span>
              <button className="flex items-center gap-3  rounded-lg border border-x-2 bg-primary-700 px-3 py-2  text-white">
                <span className="px-1 text-sm">See more</span>
              </button>
            </div>
            <div className="space-y-4">
              <AudioCard size="sm" />
              <AudioCard size="sm" />
              <AudioCard size="sm" />
              <AudioCard size="sm" />
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
              <AudioCard size="sm" />
              <AudioCard size="sm" />
              <AudioCard size="sm" />
              <AudioCard size="sm" />
            </div>
          </div>
          <div className=" rounded-md border border-primary-200 p-3 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <span>جديد الشروحات العلمية:</span>
              <button className="flex items-center gap-3  rounded-lg border border-x-2 bg-primary-700 px-3 py-2  text-white">
                <span className="px-1 text-sm">See more</span>
              </button>
            </div>
            <div className="space-y-4">
              <AudioCard size="sm" />
              <AudioCard size="sm" />
              <AudioCard size="sm" />
              <AudioCard size="sm" />
            </div>
          </div>
        </section>

        <section className="">
          <div className="space-y-3 rounded-md border border-primary-200 bg-white p-3 shadow-md">
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
