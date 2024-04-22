import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black flex flex-col text-white w-full mt-6 p-2">
      <div className="text-xl tracking-tighter font-bold mt-6 mb-2">
        BLISS365
      </div>
      <div className="text-xl tracking-tighter font-bold  p-4">
        <input
          type="text"
          name=""
          id=""
          placeholder="Email Id"
          className="h-[4vh] text-sm placeholder:p-2 bg-black max-sm:w-full sm:w-[60vw] md:w-[40vw] lg:w-[25vw] border-zinc-100 border-[0.5px] w-full placeholder:text-white rounded-md outline-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="font-bold text-sm">Company</div>
        <div className="font-bold text-sm">Resources</div>
        <div className=" text-sm">Shop</div>
        <div className=" text-sm">FAQ</div>
        <div className=" text-sm">About</div>
        <div className=" text-sm">Returns</div>
        <div className=" text-sm">Chart</div>
        <div className=" text-sm">Privacy Policy</div>
        <div className=" text-sm">Custom Merch</div>
        <div className=" text-sm">Terms of Service</div>
        <div className=" text-sm">Who We Support</div>
        <div className=" text-sm">Your Account</div>
      </div>
      <div className="mt-4 grid grid-cols-2">
        <div>
          <div className="uppercase ">Address</div>
          <div className="uppercase text-xs mt-2">
            Hyderabad, Andhra Pradesh
          </div>
          <div className="uppercase text-xs ">INDIA, 78423</div>
        </div>
        <div>
          <div className="text-">FOLLOW US</div>
          <div className="flex gap-2 ">
            <div>
              <FaInstagram className="text-xl" />
            </div>
            <div>
              <FaGithub className="text-xl" />
            </div>
            <div>
              <FaLinkedin className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
