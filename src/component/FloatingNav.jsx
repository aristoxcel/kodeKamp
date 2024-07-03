import  { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../utils/cn"
import { MdBlurLinear } from "react-icons/md";

export const FloatingNav = ({ navItems, className }) => {
    const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = scrollY.get();
      const direction = current - prevScrollY.current;

      if (current < 0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }

      prevScrollY.current = current;
    };

    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <AnimatePresence >
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "  fixed top-10 inset-x-0 mx-auto border shadow-md shadow-[#7f56d9] dark:border-white/[0.2] rounded-full dark:bg-black bg-transparent  z-[5000] pr-2 pl-8 py-2  space-x-4",
          className
        )}
      >
        <div className="flex  justify-between ">
  <div className="flex justify-start">
    <h1 className="text-2xl lg:text-3xl font-medium hidden lg:flex">
      <span className="text-[#7f56d9]">N</span>AV<span className="text-[#7f56d9]">B</span>AR
    </h1>
    <h1 className="text-2xl lg:text-3xl font-medium lg:hidden ">
      <span className="text-[#7f56d9]">N</span>AV
    </h1>
  </div>

  <div className="hidden lg:flex">
    <ul className="flex space-x-4 px-1 font-semibold">
    {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1  dark:hover:text-neutral-300 hover:text-[#7f56d9]"
            )}
          >
          
            <span className="px-3">{navItem.name}</span>
          </a>
        ))}
    </ul>
  </div>

  <div className="flex items-center">
    <div className="relative">
      <div
        tabIndex={0}
        role="button"
        title="Menu"
        className="lg:hidden m-2 p-2 bg-teal-700 text-white rounded hover:bg-teal-600 focus:outline-none"
      >
        <MdBlurLinear className="text-2xl" />
      </div>
      <ul
        tabIndex={0}
        className="absolute right-0 mt-2 w-44 p-2 shadow-lg bg-white text-teal-600 rounded hidden focus-within:block"
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
      </ul>
    </div>
    <button className="text-[#7f56d9] border border-[#7f56d9] rounded-lg p-2 font-semibold mr-2">Log in</button>
    <button className="bg-[#7f56d9] rounded-lg p-2 font-semibold text-white">Sign up</button>
  </div>
</div>

      </motion.div>
    )}
  </AnimatePresence>
);
};