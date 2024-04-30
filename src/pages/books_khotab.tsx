import AudioCard from "@/components/AudioCard";
import ImportantContents from "@/components/importantContents";
import React from "react";

export default function Books_khotab() {
  return (
    <div className="flex">
      {/* <section className="my-5 rounded-md border border-primary-200 bg-white p-3 shadow-md">
        <div
          className="bg-[#844E10] p-2 text-center"
          style={{ backgroundImage: "url('/public/assets/bg.jpg')" }}
        >
          محتويات هامه
        </div>
        <div className="space-y-4">
          <AudioCard size="lg" />
          <AudioCard size="lg" />
          <AudioCard size="lg" />
          <AudioCard size="lg" />
        </div>
      </section> */}

      <ImportantContents />
    </div>
  );
}
