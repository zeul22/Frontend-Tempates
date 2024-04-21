import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
const Nav = () => {
  const [burger, setburger] = useState(true);
  return (
    <div className="flex justify-between p-6 bg-black text-white">
      <div>ICON</div>
      <div className="hidden md:flex gap-3 mr-6">
        {["Home", "About", "Projects", "Contact"].map((item, index) => {
          return (
            <div key={index}>
              <a href={`#${item}`}>{item}</a>
            </div>
          );
        })}
      </div>
      {/* Small Screen */}
      <div className="md:hidden block cursor-pointer">
        {burger ? (
          <RxHamburgerMenu
            className="text-2xl"
            onClick={() => setburger(!burger)}
          />
        ) : (
          <GrClose className="text-2xl" onClick={() => setburger(!burger)} />
        )}
        <div
          className={`md:hidden rounded-b-2xl fixed p-6 h-[45vh] transition-all w-[70vw] bg-black  duration-300 top-[7.5vh] 
        ${!burger ? " right-0 " : "right-[-100%]"} `}
        >
          <div className="flex flex-col gap-12 justify-center items-center">
            {["Home", "About", "Projects", "Contact"].map((item, index) => {
              return (
                <div key={index}>
                  <a href={`#${item}`}>{item}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
