import React from 'react';
import Image from 'next/image'; // Import Image component from 'next/image'

interface BookCardProps {
  name: string;
  img: string;
}

const BookCard: React.FC<BookCardProps> = ({ name, img }) => {
  return (
    <div className='p-2 bg-primary-200 w-52 rounded-md'>
      <div>
        <Image
          className='mb-2 w-48 h-60'
          src={img}
          alt="book cover" // Update alt text accordingly
          width={100}
          height={50}
        />
      </div>
      <div className='bg-gradient-to-b from-primary-700 to-primary-800 rounded-md text-center p-2'>
        <div>
          <span className='text-xs font-normal text-white mb-4'>{name}</span>
        </div>
        <button className="rounded-md bg-white px-2">
          <span className="text-xs">View Book</span>
        </button>
      </div>
    </div>
  );
}

export default BookCard;
