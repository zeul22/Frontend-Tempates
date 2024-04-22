import React from "react";

const Art = () => {
  return (
    <div className="mt-6">
      <div>
        <div className="text-3xl text-black flex justify-center font-bold">
          <div className="border-b border-zinc-400">MY ART</div>
        </div>
        <div className="grid grid-cols-2 mt-2 p-4 gap-2 ">
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-green-200 max-md:h-[20vh] md:h-[25vh] max-sm:h-[20vh] rounded-xl"></div>
              <div className="bg-green-300 max-md:h-[20vh] md:h-[25vh] max-sm:h-[20vh] rounded-xl"></div>
            </div>
            <div>
              <div className="bg-green-100 h-[25vh] rounded-xl"></div>
            </div>
          </div>
          <div className="h-full w-full bg-green-500 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Art;
