import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { RiHomeHeartLine } from "react-icons/ri";
import { easeIn, motion } from "framer-motion";
const Nav = () => {
  return (
    <div className="text-red-200">
      <div className="flex justify-between p-4">
        {/* For Screens less than lg */}
        <motion.div
          className="lg:hidden"
          initial={{ x: -50, scale: 0.2 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 0.75 }}
        >
          <RiMenu2Fill className="text-3xl" />
        </motion.div>
        <motion.div
          className="lg:hidden"
          initial={{ x: 50, scale: 0.2 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 0.75 }}
        >
          <RiHomeHeartLine className="text-3xl" />
        </motion.div>

        {/* for screens lg at least */}
        <div className="hidden lg:flex">LOGO</div>
        <div className="hidden lg:flex gap-6">
          {["Home", "About", "Services", "Occasions", "Shop", "News"].map(
            (item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: easeIn }}
              >
                {item}
              </motion.div>
            )
          )}
        </div>
        <div className="hidden lg:flex">CONTACT US</div>
      </div>
    </div>
  );
};

export default Nav;
