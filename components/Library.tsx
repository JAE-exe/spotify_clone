"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
  const onClick = () => {
    // upload
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          className="ml-auto text-neutral-400 cursor-pointer hover:text-white transition"
          size={20}
          onClick={onClick}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3 ">Song List</div>
    </div>
  );
};

export default Library;
