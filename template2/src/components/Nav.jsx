import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaCircleUser, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  const [burgerclick, setburgerclick] = useState(true);
  const sidebar = () => {};
  return (
    <div
      className={`bg-gradient-to-r from-green-200 to-blue-300 h-[88vh] text-zinc-700`}
    >
      {/* // Responsive */}
      <div className=" h-[7vh] flex justify-between items-center font-bold uppercase px-2">
        <div className="burger flex gap-2">
          <div className="max-lg:flex hidden">
            {burgerclick ? (
              <AiOutlineClose
                className="text-3xl cursor-pointer"
                onClick={() => setburgerclick(!burgerclick)}
              />
            ) : (
              <RxHamburgerMenu
                className="text-3xl cursor-pointer"
                onClick={() => setburgerclick(!burgerclick)}
              />
            )}
          </div>
          <div
            className={`md:hidden rounded-b-2xl fixed p-6 h-screen transition-all w-full duration-300 top-[7.5vh] 
        ${burgerclick ? " left-0 " : "left-[-100%]"} `}
          >
            <div className="flex flex-col gap-12 mt-2 justify-center items-center">
              {[
                "SHOP",
                "ABOUT",
                "BOOK",
                "COLLAB",
                "COMMUNITY",
                "WHOLESALE",
              ].map((item, index) => (
                <div key={index} className="font-bold text-2xl">
                  {item}
                </div>
              ))}
              <div className="flex justify-center uppercase text-xs gap-2">
              <div>
              <FaInstagram className="text-2xl" />
            </div>
            <div>
              <FaGithub className="text-2xl" />
            </div>
            <div>
              <FaLinkedin className="text-2xl" />
            </div>
              </div>
              <div className="flex justify-center uppercase text-xs -mt-10">&copy;2020-2024- All Rights Reserved</div>
            </div>
          </div>
          <div className="hidden lg:flex text-3xl">BLISS365</div>
          <div className="hidden max-sm:flex">
            <IoIosSearch className="text-3xl" />
          </div>
        </div>
        <div className="burger tracking-tighter hidden max-lg:flex text-3xl">
          Bliss365
        </div>
        <div className="burger tracking-tighter hidden lg:flex text-3xl gap-2">
          {["SHOP", "ABOUT", "BOOK", "COLLAB", "COMMUNITY", "WHOLESALE"].map(
            (item, index) => (
              <div key={index}>{item}</div>
            )
          )}
        </div>
        <div className="burger flex gap-2">
          <div className="max-sm:hidden md:flex ">
            <IoIosSearch className="text-3xl" />
          </div>
          <div className="max-sm:hidden md:flex">
            <FaCircleUser className="text-3xl" />
          </div>
          <div>
            <FiShoppingCart className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
