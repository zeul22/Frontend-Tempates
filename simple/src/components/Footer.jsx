import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-black border-t border-zinc-300 text-white">
      <div className="flex justify-center text-xl md:text-4xl">
        <div className="font-serif tracking-tighter">
          <div className="m-2">
            About us
            <div className="ml-2 gap-6 flex text-sm font-light tracking-widest">
              <div>Careers</div>
              <div>Support</div>
              <div>Culture</div>
              <div>Careers</div>
              <div>Support</div>
              <div>Culture</div>
            </div>
          </div>
          <div className="m-2">
            <div className="ml-2 gap-6 flex text-sm font-light tracking-widest justify-center">
              <div>
                <FaInstagram className="text-3xl" />
              </div>
              <div>
                <FaYoutube className="text-3xl" />
              </div>
              <div>
                <FaSquareXTwitter className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-2 font-serif tracking-tighter">
        &copy;2020-2024: All Rights Reserved, Bliss365
      </div>
    </div>
  );
};

export default Footer;
