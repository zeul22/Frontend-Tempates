import React from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
const Home = () => {
  return (
    <div>
      <div className="h-[75vh] w-full text-red-200 relative">
        <motion.div
          initial={{ x: -500, opacity: 0.2 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
          className="tracking-widest mt-16 mx-6 font-extralight 
          max-sm:text-5xl text-7xl md:text-7xl lg:text-8xl max-xl:9xl "
        >
          TEMPLATE#3
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "backIn" }}
          className="mt-4 font-extralight mx-40 text-2xl max-sm:text-xl text-pink-900"
        >
          By BLISS365
        </motion.div>
        <div className="m-2 mx-8 border-b mt-6 w-[75vw] border-red-200"></div>
        <div
          className="mt-6 mx-8 tracking-widest font-extralight bg-red-200 text-gray-500 
        w-[16vw] md:w-[15vw] max-sm:w-[25vw] max-sm:text-xs lg:w-[10vw] items-center p-2 rounded-md
        hover:bg-red-400 transtion duration-300 cursor-pointer hover:text-white
        "
        >
          SHOP NOW
        </div>
        <div className="flex ">
          <motion.div
            initial={{ y: "-55vh", opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: easeInOut }}
            className="md:flex hidden absolute bg-red-900 h-[50vh] w-[15vw] rounded-md  top-1 right-[23vw]
        max-xl:h-[50vh] max-xl:w-[15vw]
        "
          ></motion.div>
          <motion.div
            initial={{ y: "55vh", opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: easeInOut }}
            className="hidden md:flex absolute bg-pink-900 h-[50vh] w-[15vw] rounded-md  right-[40vw]
            max-xl:h-[50vh] max-xl:w-[15vw]
            "
          ></motion.div>
          <motion.div
            initial={{ y: "55vh", opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: easeInOut }}
            className=" hidden md:flex absolute bg-purple-900 h-[50vh] w-[15vw] rounded-md  right-[6vw]
            max-xl:h-[50vh] max-xl:w-[15vw]
            "
          ></motion.div>
        </div>
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ x: "-55vh", opacity: 0.2 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: easeInOut }}
            className="flex md:hidden absolute bg-red-900 rounded-md  bottom-[36vh] right-[23vw]
        max-xl:h-[12vh] max-xl:w-[70vw]
        "
          ></motion.div>
          <motion.div
            initial={{ x: "55vh", opacity: 0.2 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: easeInOut }}
            className="flex md:hidden absolute bg-pink-900 rounded-md  bottom-[22vh] right-[12vw]
        max-xl:h-[12vh] max-xl:w-[70vw]
        "
          ></motion.div>
          <motion.div
            initial={{ x: "-55vh", opacity: 0.2 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: easeInOut }}
            className="flex md:hidden absolute bg-purple-900 rounded-md  bottom-[7.5vh] right-[23vw]
        max-xl:h-[12vh] max-xl:w-[70vw]
        "
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
