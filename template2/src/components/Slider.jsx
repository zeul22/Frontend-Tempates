import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
const Slider = ({ works }) => {
  const [current, setCurrent] = useState(0);
  const length = works.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(works) || works.length <= 0) {
    return null;
  }

  return (
    <div className=" flex items-center justify-center max-sm:w-full md:w-[60vw]">
      <button onClick={prevSlide} className="left-0 z-10 text-white p-2 m-2">
        <FaArrowCircleLeft className="text-3xl bg-zinc-600 rounded-full text-red" />
      </button>

      {works.map((work, index) => (
        <div
          key={index}
          className={index === current ? "opacity-100" : "opacity-0"}
        >
          {index === current && (
            // <img src={image} alt="slide" className="w-full h-auto block" />
            <div className="flex flex-col gap-2 text-black">
              <div className="flex justify-center font-bold uppercase text-3xl mb-6 tracking-widest">
                <div className="border-b border-zinc-400">{work.title}</div>
              </div>
              <div className="font-light text-lg flex justify-start">
                {work.description}
              </div>
            </div>
          )}
        </div>
      ))}
      <button onClick={nextSlide} className="right-0 z-10  text-white p-2 m-2">
        <FaArrowCircleRight className="text-3xl bg-zinc-600 rounded-full text-red" />
      </button>
    </div>
  );
};

export default Slider;
