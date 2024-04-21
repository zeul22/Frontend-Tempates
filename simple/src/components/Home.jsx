import React from "react";

const Home = () => {
  return (
    <div className="mb-[17vh] text-black ">
      <div className="block md:flex justify-between  h-[70vh] w-full border border-zinc-000 outline-none">
        <div className=" ml-6 mt-24 p-2 font-bold font-serif tracking-tighter leading-none md:text-9xl text-4xl ">
          PROJECT
          <div className=" lg:leading-1"></div>
          <div className="p-2 ml-6">TEMPLATE #1</div>
          <div className="border-t border-zinc-600 mt-4 p-6 md:text-4xl text-2xl font-light tracking-widest">
            What's Your Thought on this one?
          </div>
        </div>
        <div
          className="mt-12 ml-40 w-[40vw]  mr-60 items-center  flex
        md:h-[55vh] md:w-[25vw]
        "
        >
          <img
            src="https://imgs.search.brave.com/IgHsBaD1HqWSyvKweD8ZoiFatz5qR489_yo_1pxJLXQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0Zn/OVk5N1pCOU1CVFpw/ZHFNRlczNFYtMzIw/LTgwLmpwZw"
            alt="SOME LOGO"
            className="h-[25vh] md:h-[50vh] w-full p-3 rounded-3xl bg-nocover bg-no-repeat"
          />
        </div>
      </div>
      <div>
        <div className="border-zinc-400 border-t mt-12"></div>
        <div className="relative">
          <button className="absolute  left-12 rounded-full bg-black p-4 text-white top-4 ">
            <div className="">
            Know More
            </div>
          </button>
          <button className="absolute right-12 rounded-full bg-black p-4 text-white top-4 border-b border-zinc-300">
          <div className="border-b w-[5.5rem] border-zinc-400">
            Sign-up
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
