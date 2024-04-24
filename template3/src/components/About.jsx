import React from "react";
import { easeInOut, motion } from "framer-motion";
const About = () => {
  return (
    <div className="text-white max-sm:mt-[8vh] sm:mt-[15vh]">
      <div className="flex justify-center items-center p-2 ">
        <div className="flex flex-col gap-4">
          <div className="tracking-widest font-extralight text-6xl flex justify-center">
            <div className="border-b p-2 mt-1">TITLE</div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="tracking-widest font-extralight text-2xl flex justify-center p-6"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            maiores ullam illo saepe ipsam quis, quos tempora eius error fugit.
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center mt-6 mb-12">
        <div className="grid grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -90, y: 90 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
            className="relative max-sm:h-[30vh] md:h-[40vh] w-[20vw] rounded-md bg-red-900
            "
          >
            <div
              className="absolute tracking-widest opacity-0 font-extralight text-white cursor-pointer flex justify-center items-center w-full h-full bg-red-000  bg-transparent border hover:border-zinc-600
            hover:bg-red-600 hover:opacity-100 transition-all duration-200 hover:rounded-md
            "
            >
              Buy Now
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative max-sm:h-[30vh] md:h-[40vh] w-[20vw] rounded-md bg-blue-900"
          >
            <div
              className="absolute tracking-widest opacity-0 font-extralight text-white cursor-pointer flex justify-center items-center w-full h-full bg-red-000  bg-transparent border hover:border-zinc-600
        hover:bg-blue-600 hover:opacity-100 transition-all duration-200 hover:rounded-md
        "
            >
              Buy Now
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 90, y: 90 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
            className="relative max-sm:h-[30vh] md:h-[40vh] w-[20vw] rounded-md bg-yellow-900"
          >
            <div
              className="absolute tracking-widest opacity-0 font-extralight text-white cursor-pointer flex justify-center items-center w-full h-full bg-red-000  bg-transparent border hover:border-zinc-600
        hover:bg-yellow-600 hover:opacity-100 transition-all duration-200 hover:rounded-md 
        "
            >
              Buy Now
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-red-00 h-auto mt-40 mb-20">
        <div className="opacity-0">sad</div>
        <div className=" mx-8 mt-6 bg-transparent rounded-md flex items-center justify-center h-[71vh]">
          <div className="flex flex-col gap-6 bg-inherit">
            <div className="flex gap-2 h-[30vh] max-sm:w-[60vw] md:w-[40vw] bg-inherit ">
              <div className="bg-transparent w-full gap-2">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="bg-pink-900 h-[25vh] mt-12 rounded-md relative"
                >
                  <div className="text-white z-10 absolute tracking-widest font-extralight  cursor-pointer flex justify-center items-center w-full h-full bg-red-000  bg-transparent ">
                    <div className="bg-inherit p-3">WHAT DO WE DO?</div>
                  </div>
                </motion.div>
              </div>
              <div className=" w-full gap-2 bg-inherit">
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="relative bg-blue-900 h-full  rounded-md"
                >
                  <div className="text-white z-10 absolute tracking-widest font-extralight  cursor-pointer flex justify-center items-center w-full h-full bg-red-000  bg-transparent ">
                    <div className="bg-inherit p-3">
                      WHY YOU SHOULD TRUST US?
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex gap-2 h-[30vh] max-sm:w-[60vw] md:w-[40vw] bg-inherit">
              <div className=" w-full gap-2 bg-inherit">
                <motion.div
                  initial={{ y: 200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="relative bg-green-900 h-full rounded-md"
                >
                  <div className="text-white z-10 absolute tracking-widest font-extralight  cursor-pointer flex justify-center items-center w-full h-full bg-red-000  bg-transparent ">
                    <div className="bg-inherit p-3">WHAT ARE THE GOALS?</div>
                  </div>
                </motion.div>
              </div>

              <div className="bg-inherit w-full gap-2 ">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="relative bg-red-900 h-[25vh] mt-12 rounded-md"
                >
                  <div className="text-white z-10 absolute tracking-widest font-extralight  cursor-pointer flex justify-center items-center w-full h-full bg-red-000  bg-transparent ">
                    <div className="bg-inherit p-3">HOW ARE WE PERFORMING?</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-inherit flex flex-col gap-6 ">
          <div className="bg-inherit flex justify-center max-sm:text-5xl md:text-7xl tracking-widest font-extralight">
            <div className="bg-inherit border-b-2 p-2 border-zinc-400">
              TITLE
            </div>
          </div>
          <div className=" bg-inherit flex justify-center max-sm:text-2xl p-6 md:text-4xl tracking-widest font-extralight mb-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: easeInOut }}
              className=" bg-inherit p-2 rounded-md font-extralight font-sans text-red-400"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              inventore, commodi explicabo praesentium pariatur reiciendis,
              neque blanditiis corporis vero ipsam ad vitae quas veritatis
              fugit, at eius ut unde. Dolore, id provident, neque ad dolorum
              iure quo voluptas tenetur maxime ipsam odio aspernatur libero
              error minus ex. Temporibus, minima facilis?
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
