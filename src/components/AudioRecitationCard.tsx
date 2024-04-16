import React from 'react'
import { SlCloudDownload } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";


export default function AudioRecitationCard() {
  return (
    <div className='space-y-4'>
      <div className='md:grid md:grid-cols-2 md:space-x-4 space-y-4 md:space-y-0'>
        <div className={`rounded-md bg-[url('/assets/audioCard_bg.jpg')] p-4 bg-cover bg-center bg-no-repeat space-y-3`}>
            <div className='flex justify-between'>
                <div className='flex bg-primary-200 p-1 md:p-3 text-primary-950 space-x-2 items-center rounded-md'>
                    <span className='text-xs md:text-xl'><SlCloudDownload /></span>
                    <span className='text-xs md:text-sm'>Download</span>
                </div>
                <div className='pl-3 pr-2 text-xs md:text-sm md:pl-14 md:pr-4 bg-primary-600 items-center justify-end flex rounded-md'><span> سورة الفاتحة </span></div>
            </div>
            {/* audio player */}
            <div>
              <audio></audio>
            </div>
            <div className='bg-primary-800 rounded-md flex justify-between md:p-2 p-1'>
            <div></div>
            <div className='flex items-center space-x-2 md:space-x-5'>
              <span className='text-xs md:text-sm'>زيارات : 53٬40</span>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                <span className='md:text-lg text-sm'>
                  <FaFacebookSquare />
                </span>
                  <span className='text-xs md:text-sm'> Facebook </span>
              </div>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                <span className='md:text-lg text-sm'>
                  <BsTwitterX />
                </span>
                  <span className='md:text-sm text-xs'> Twitter </span>
              </div>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                  <span className='md:text-sm text-[2vw]'> أضيف : 21يوليو 2015 </span>
              </div>
              
            </div>
            </div>
        </div>

        {/* second column */}

        <div className={`rounded-md bg-[url('/assets/audioCard_bg.jpg')] p-4 bg-cover bg-center bg-no-repeat space-y-3`}>
            <div className='flex justify-between'>
                <div className='flex bg-primary-200 p-1 md:p-3 text-primary-950 space-x-2 items-center rounded-md'>
                    <span className='text-xs md:text-xl'><SlCloudDownload /></span>
                    <span className='text-xs md:text-sm'>Download</span>
                </div>
                <div className='pl-3 pr-2 text-xs md:text-sm md:pl-14 md:pr-4 bg-primary-600 items-center justify-end flex rounded-md'><span> سورة الفاتحة </span></div>
            </div>
            {/* audio player */}
            <div>
              <audio></audio>
            </div>
            <div className='bg-primary-800 rounded-md flex justify-between md:p-2 p-1'>
            <div></div>
            <div className='flex items-center space-x-2 md:space-x-5'>
              <span className='text-xs md:text-sm'>زيارات : 53٬40</span>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                <span className='md:text-lg text-sm'>
                  <FaFacebookSquare />
                </span>
                  <span className='text-xs md:text-sm'> Facebook </span>
              </div>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                <span className='md:text-lg text-sm'>
                  <BsTwitterX />
                </span>
                  <span className='md:text-sm text-xs'> Twitter </span>
              </div>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                  <span className='md:text-sm text-[2vw]'> أضيف : 21يوليو 2015 </span>
              </div>
              
            </div>
            </div>
        </div>
      </div>

      {/* second group */}

      <div className='md:grid md:grid-cols-2 md:space-x-4 space-y-4 md:space-y-0'>
        <div className={`rounded-md bg-[url('/assets/audioCard_bg.jpg')] p-4 bg-cover bg-center bg-no-repeat space-y-3`}>
            <div className='flex justify-between'>
                <div className='flex bg-primary-200 p-1 md:p-3 text-primary-950 space-x-2 items-center rounded-md'>
                    <span className='text-xs md:text-xl'><SlCloudDownload /></span>
                    <span className='text-xs md:text-sm'>Download</span>
                </div>
                <div className='pl-3 pr-2 text-xs md:text-sm md:pl-14 md:pr-4 bg-primary-600 items-center justify-end flex rounded-md'><span> سورة الفاتحة </span></div>
            </div>
            {/* audio player */}
            <div>
              <audio></audio>
            </div>
            <div className='bg-primary-800 rounded-md flex justify-between md:p-2 p-1'>
            <div></div>
            <div className='flex items-center space-x-2 md:space-x-5'>
              <span className='text-xs md:text-sm'>زيارات : 53٬40</span>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                <span className='md:text-lg text-sm'>
                  <FaFacebookSquare />
                </span>
                  <span className='text-xs md:text-sm'> Facebook </span>
              </div>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                <span className='md:text-lg text-sm'>
                  <BsTwitterX />
                </span>
                  <span className='md:text-sm text-xs'> Twitter </span>
              </div>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                  <span className='md:text-sm text-[2vw]'> أضيف : 21يوليو 2015 </span>
              </div>
              
            </div>
            </div>
        </div>

        {/* second column */}

        <div className={`rounded-md bg-[url('/assets/audioCard_bg.jpg')] p-4 bg-cover bg-center bg-no-repeat space-y-3`}>
            <div className='flex justify-between'>
                <div className='flex bg-primary-200 p-1 md:p-3 text-primary-950 space-x-2 items-center rounded-md'>
                    <span className='text-xs md:text-xl'><SlCloudDownload /></span>
                    <span className='text-xs md:text-sm'>Download</span>
                </div>
                <div className='pl-3 pr-2 text-xs md:text-sm md:pl-14 md:pr-4 bg-primary-600 items-center justify-end flex rounded-md'><span> سورة الفاتحة </span></div>
            </div>
            {/* audio player */}
            <div>
              <audio></audio>
            </div>
            <div className='bg-primary-800 rounded-md flex justify-between md:p-2 p-1'>
            <div></div>
            <div className='flex items-center space-x-2 md:space-x-5'>
              <span className='text-xs md:text-sm'>زيارات : 53٬40</span>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                <span className='md:text-lg text-sm'>
                  <FaFacebookSquare />
                </span>
                  <span className='text-xs md:text-sm'> Facebook </span>
              </div>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                <span className='md:text-lg text-sm'>
                  <BsTwitterX />
                </span>
                  <span className='md:text-sm text-xs'> Twitter </span>
              </div>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                  <span className='md:text-sm text-[2vw]'> أضيف : 21يوليو 2015 </span>
              </div>
              
            </div>
            </div>
        </div>
      </div>

      {/* third group */}

      <div className='md:grid md:grid-cols-2 md:space-x-4 space-y-4 md:space-y-0'>
        <div className={`rounded-md bg-[url('/assets/audioCard_bg.jpg')] p-4 bg-cover bg-center bg-no-repeat space-y-3`}>
            <div className='flex justify-between'>
                <div className='flex bg-primary-200 p-1 md:p-3 text-primary-950 space-x-2 items-center rounded-md'>
                    <span className='text-xs md:text-xl'><SlCloudDownload /></span>
                    <span className='text-xs md:text-sm'>Download</span>
                </div>
                <div className='pl-3 pr-2 text-xs md:text-sm md:pl-14 md:pr-4 bg-primary-600 items-center justify-end flex rounded-md'><span> سورة الفاتحة </span></div>
            </div>
            {/* audio player */}
            <div>
              <audio></audio>
            </div>
            <div className='bg-primary-800 rounded-md flex justify-between md:p-2 p-1'>
            <div></div>
            <div className='flex items-center space-x-2 md:space-x-5'>
              <span className='text-xs md:text-sm'>زيارات : 53٬40</span>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                <span className='md:text-lg text-sm'>
                  <FaFacebookSquare />
                </span>
                  <span className='text-xs md:text-sm'> Facebook </span>
              </div>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                <span className='md:text-lg text-sm'>
                  <BsTwitterX />
                </span>
                  <span className='md:text-sm text-xs'> Twitter </span>
              </div>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                  <span className='md:text-sm text-[2vw]'> أضيف : 21يوليو 2015 </span>
              </div>
              
            </div>
            </div>
        </div>

        {/* second column */}

        <div className={`rounded-md bg-[url('/assets/audioCard_bg.jpg')] p-4 bg-cover bg-center bg-no-repeat space-y-3`}>
            <div className='flex justify-between'>
                <div className='flex bg-primary-200 p-1 md:p-3 text-primary-950 space-x-2 items-center rounded-md'>
                    <span className='text-xs md:text-xl'><SlCloudDownload /></span>
                    <span className='text-xs md:text-sm'>Download</span>
                </div>
                <div className='pl-3 pr-2 text-xs md:text-sm md:pl-14 md:pr-4 bg-primary-600 items-center justify-end flex rounded-md'><span> سورة الفاتحة </span></div>
            </div>
            {/* audio player */}
            <div>
              <audio></audio>
            </div>
            <div className='bg-primary-800 rounded-md flex justify-between md:p-2 p-1'>
            <div></div>
            <div className='flex items-center space-x-2 md:space-x-5'>
              <span className='text-xs md:text-sm'>زيارات : 53٬40</span>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                <span className='md:text-lg text-sm'>
                  <FaFacebookSquare />
                </span>
                  <span className='text-xs md:text-sm'> Facebook </span>
              </div>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                <span className='md:text-lg text-sm'>
                  <BsTwitterX />
                </span>
                  <span className='md:text-sm text-xs'> Twitter </span>
              </div>
              <div className='flex bg-primary-300 py-2 px-1 rounded-sm text-primary-900 items-center space-x-1'>
                  <span className='md:text-sm text-[2vw]'> أضيف : 21يوليو 2015 </span>
              </div>
              
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
