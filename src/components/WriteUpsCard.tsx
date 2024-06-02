import React from "react";

interface WriteUpsCardProps {
  name: string;
  date: string;
}

const WriteUpsCard: React.FC<WriteUpsCardProps> = ({ name, date }) => {
  return (
    <div className="flex flex-grow cursor-pointer justify-between rounded-md bg-gray-100 p-4 text-xs font-medium text-gray-700">
      <span className="title">{name}</span>
      <span className="text-[10px]">{date}</span>
    </div>
  );
};

export default WriteUpsCard;
