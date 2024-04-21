import React from "react";

const Contact = () => {
  return (
    <div className=" bg-black pb-20 mt-16 text-white font-serif text-3xl md:text-4xl">
      <div className="p-6 flex justify-center">
        <div className="border-b">CONTACT ME</div>
      </div>
      <div>
        <form action="" className="text-black">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="123@gmail.com"
              className="border-none outline-none p-1 rounded-md mt-12 placeholder:text-gray-600 placeholder:p-2"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Subject"
              className="border-none outline-none p-1 rounded-md  mt-12 placeholder:text-gray-600 placeholder:p-2"
            />
          </div>
          <div className="flex justify-center">
            <textarea
              type="text"
              placeholder="Your Message"
              className="border-none outline-none p-1 rounded-md mt-12 text-wrap h-[20vh] w-[60vw] md:w-[60vw] lg:w-[25vw] placeholder:text-gray-600 placeholder:p-2"
            />
          </div>

          <div className="flex justify-center mt-12 ">
            <button className="bg-white p-4 rounded-full w-[30vw] md:w-[10vw] text-black tracking-tighter">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
