import { motion } from "framer-motion";
import useTypingAnimation from "../utils/useTypingAnimation";

const Intro = () => {
  const WhatIAm = ["an aspiring developer", "your developer"];
  const typing = useTypingAnimation(WhatIAm);
  return (
    <motion.div
      initial={{ opacity: 0, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.3,
        type: "spring",
        damping: 20,
      }}
      className="flex flex-col items-center justify-center w-full h-screen p-4 "
    >
      <div className="text-4xl font-bold text-center md:text-6xl">
        Hi I'm{" "}
        <span className=" text-cyan-400 hover:animate-pulse">
          D<span>uc</span> <span>D</span>
          <span>o</span>
        </span>
      </div>
      <div className="text-2xl text-center md:text-4xl">
        I'm <span className="blinking-cursor">{typing}</span>
      </div>
    </motion.div>
  );
};

export default Intro;
