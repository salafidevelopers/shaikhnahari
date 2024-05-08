import React from 'react'


interface WriteUpsCardProps {
  name: string;
  date: string;
}

const WriteUpsCard: React.FC<WriteUpsCardProps> = ({ name, date }) => {
  return (
    <div className='flex justify-between rounded-md bg-gray-100 text-gray-700 flex-grow p-4 text-xs font-medium'>
      <span className='title'>
        {name}
      </span>
      <span className='text-[10px]'>
        {date}
      </span>
    </div>
  );
}

export default WriteUpsCard;