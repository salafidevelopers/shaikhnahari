import AudioCard from "@/components/AudioCard";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="my-5 p-5">
        <AudioCard size="lg" />
      </section>
    </>
  );
}
