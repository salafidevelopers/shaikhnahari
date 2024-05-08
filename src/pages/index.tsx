import AudioCard from "@/components/AudioCard";
import BookCard from "@/components/BookCard";
import WriteUpsCard from "@/components/WriteUpsCard";
import Hero from "@/components/hero";
import { audios, books, writeups } from "@/utils/data";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HiLocationMarker } from "react-icons/hi";

export default function Home() {
 const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};




  return (
    <>
      <Hero />
      <div className="my-6 px-14 md:px-10">
     <section className="my-5 rounded-md  bg-white flex gap-5 justify-between">
<div className=" rounded-md border border-primary-200 p-3 shadow-md flex-grow w-1/2">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm">جديد مقالات الشيخ :</span>
              <button className="flex items-center gap-3 rounded-lg border border-x-2 bg-gray-700 px-3 py-2  text-white">
                <span className="px-1 text-sm">See more</span>
              </button>
            </div>
            <div className="space-y-2 ">
            {writeups.map((writeup) => (
              <WriteUpsCard
                key={writeup.id}
              name ={writeup.name}
              date={writeup.date}
              />
            ))}
            </div>
          </div>

<div className=" rounded-md p-3 bg-primary-100 flex-grow w-1/2">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm">جديد الكتب</span>
              <button className="flex items-center gap-3  rounded-lg border border-x-2 bg-primary-700 px-3 py-2  text-white">
                <span className="px-1 text-sm font-normal">See more</span>
              </button>
            </div>
            <div className="mx-auto text-center">

             <Carousel responsive={responsive}  className=" ">
              {books.map((book) => (
              <BookCard
                key={book.id}
              name ={book.name}
                img={book.img}
                
              />
            ))}
             
            </Carousel>
            </div>
           
          
          </div>
     </section>

        <section className="my-5 rounded-md border border-primary-200 bg-white p-3 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm">جديد الشروحات العلمية:</span>
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

        <section className="my-5 mb-20 grid grid-cols-3 gap-3 rounded-md bg-white">
          <div className=" rounded-md border border-primary-200 p-3 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm">جديد الشروحات العلمية:</span>
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
              <span className="text-sm">جديد الشروحات العلمية:</span>
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
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm">جديد الشروحات العلمية:</span>
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
        </section>

        <section className="flex gap-4">
          <div className="w-1/3 rounded-md bg-[url('/assets/important_contentBg.jpg')] bg-auto bg-top ">
<div className="w-full h-full opacity-80 bg-primary-950 px-6 py-4  rounded-lg ">

     <div className=" flex items-center justify-between mb-4 mt-2">
              <span className="text-sm text-white">Friday, 1st March, 2024</span>
              <button className="flex items-center gap-2 rounded-lg border border-primary-500 bg-primary-100 px-2 py-1  text-primary-600">
                <span className="px-1 text-md"> مكة</span>
                <span ><HiLocationMarker /></span>
              </button>
            </div>
  
<div className="flex justify-center  ">
  <div className="w-full lg:w-1/2">
    <div className="overflow-x-auto rounded-lg border border-opacity-5 text-white p-2">
      <table className="table-auto rounded-md w-full  ">
        <thead>
          <tr>
            <th className="border-b border-opacity-25 px-1 font-medium text-right">SALAT</th>
            <th className="border-b px-1 text-right font-medium">TIME</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b text-sm  px-1 leading-7">Fajr</td>
            <td className="border-b text-sm  px-1 leading-7">5:27 AM</td>
          </tr>
          <tr>
            <td className="border-b text-sm  px-1 leading-7">Sunrise</td>
            <td className="border-b text-sm  px-1 leading-7">5:27 AM</td>
          </tr>
          <tr>
            <td className="border-b text-sm  px-1 leading-7">Zuhr</td>
            <td className="border-b text-sm  px-1 leading-7">5:27 AM</td>
          </tr>
          <tr>
            <td className="border-b text-sm  px-1 leading-7">Asr</td>
            <td className="border-b text-sm  px-1 leading-7">5:27 AM</td>
          </tr>
          <tr>
            <td className="border-b border-opacity-10 text-sm  px-1 leading-7">Maghrib</td>
            <td className="border-b text-sm  px-1 leading-7">5:27 AM</td>
          </tr>
          <tr>
            <td className="px-1 text-sm t-light leading-7">Isha</td>
            <td className="px-1 text-sm t-light leading-7">5:27 AM</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
          </div>
          <div className="space-y-3 w-2/3 rounded-md border border-primary-200 bg-white p-3 shadow-md">
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
