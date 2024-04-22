import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Card = () => {
  return (
    <div className="mt-[15vh] mx-auto flex flex-col justify-center mb-12">
      <div className="flex items-center justify-center">
        <div className="grid max-md:grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="max-lg:h-[70vh] h-[60vh]  max-lg:w-[90vw] w-[40vw]  rounded-2xl bg-[url('./assets/logo.png')] bg-cover bg-center"></div>
          <div
            className="max-lg:h-[70vh] h-[60vh]  max-lg:w-[90vw] w-[40vw]  rounded-2xl bg-gradient-to-r from-red-600 to-purple-800 text-white
          flex items-center justify-center"
          >
            <div className="gap-2 flex flex-col">
              <div className="text-3xl border-b">PROJECT TEMPLATE #2</div>
              <div className="flex justify-center tracking-widest mt-2">IF YOU LOVE THIS WORK</div>
              <div className="flex justify-center tracking-widest">YOU WOULD LOVE THESE</div>
              <div className="flex justify-center gap-3 mt-2">
                <div>
                  <FaInstagram className="text-4xl" />
                </div>
                <div>
                  <FaGithub className="text-4xl" />
                </div>
                <div>
                  <FaLinkedin className="text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center font-bold tracking-tighter text-3xl mt-12 mb-6">
        <div className="border-b border-zinc-300">FEATURED IN</div>
      </div>
      <div className="flex justify-center">
        <div
          className="grid max-sm:grid-cols-3 md:grid-cols-4 grid-cols-3 lg:grid-cols-8 
        gap-12 font-bold tracking-tighter font-serif text-2xl"
        >
          {[
            "Google",
            "Amazon",
            "Microsoft",
            "Youtube",
            "Forbes",
            "TedX",
            "DeShaw",
            "Zomato",
          ].map((item) => {
            return <div>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
