import React from "react";

const Services = () => {
  return (
    <div className="mb-6">
      <div className=" text-white max-sm:text-4xl md:text-6xl font-extralight tracking-widest">
        <div className=" flex justify-center  mb-6 ">
          <div className="border-b border-zinc-300 p-2 mb-6">OUR SERVICES </div>
        </div>
        <div>
          <div className="grid max-sm:grid-rows-* md:grid-cols-3 gap-3 ">
            <div className="-400 max-sm:text-xl md:text-2xl p-2">
              <div className="bg-pink max-sm:text-2xl md:text-3xl mb-2 text-blue-500">
                WORK#1
              </div>
              <div className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                eveniet.
              </div>
              <div className="flex justify-center  p-2">
                <button className="bg-red-200 p-2 tracking-tighter rounded-full hover:bg-red-400 transition-all duration-200">
                  Know More
                </button>
              </div>
            </div>
            <div className="-400 max-sm:text-xl md:text-2xl p-2">
              <div className="bg-pink max-sm:text-2xl md:text-3xl mb-2 text-red-500">
                WORK#2
              </div>
              <div className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                eveniet.
              </div>
              <div className="flex justify-center  ">
                <button className="bg-red-200 p-2 tracking-tighter rounded-full hover:bg-red-400 transition-all duration-200">
                  Know More
                </button>
              </div>
            </div>
            <div className="-400 max-sm:text-xl md:text-2xl p-2">
              <div className="bg-pink max-sm:text-2xl md:text-3xl mb-2 text-yellow-500">
                WORK#3
              </div>
              <div className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                eveniet.
              </div>
              <div className="flex justify-center  ">
                <button className="bg-red-200 p-2 tracking-tighter rounded-full hover:bg-red-400 transition-all duration-200">
                  Know More
                </button>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
