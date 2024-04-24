import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#145369] h-[25vh] text-white ">
      <div className="flex items-start justify-center bg-inherit mt-6 py-6 text-3xl font-extralight">
        LOGO
      </div>
      <div className="grid max-sm:grid-cols-3 grid-cols-4 bg-inherit">
        <div className="bg-inherit p-2 font-extralight max-sm:text-xs md:text-m">
          Bliss Anand, Hyderabad, India
          <div className="flex gap-3 p-2 bg-inherit">
            <div>
              <FaInstagram className="text-2xl bg-inherit" />
            </div>
            <div>
              <FaLinkedin className="text-2xl bg-inherit" />
            </div>
            <div>
              <FaTwitter className="text-2xl bg-inherit" />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-inherit max-sm:text-xs font-extralight text-md gap-2">
          <div className="bg-inherit cursor-pointer">Support</div>
          <div className="bg-inherit cursor-pointer">Careers</div>
          <div className="bg-inherit cursor-pointer">About us</div>
          <div className="bg-inherit cursor-pointer">Technician</div>
        </div>
        <div className="flex flex-col bg-inherit max-sm:text-xs font-extralight text-md gap-2">
          <div className="bg-inherit cursor-pointer">Technology</div>
          <div className="bg-inherit cursor-pointer">Forum</div>
          <div className="bg-inherit cursor-pointer">Our Leaders</div>
          <div className="bg-inherit cursor-pointer">News</div>
        </div>
        <div className="max-sm:hidden flex flex-col bg-inherit max-sm:text-xs font-extralight text-md gap-2">
          <div className="bg-inherit cursor-pointer">Technology</div>
          <div className="bg-inherit cursor-pointer">Forum</div>
          <div className="bg-inherit cursor-pointer">Our Leaders</div>
          <div className="bg-inherit cursor-pointer">News</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
