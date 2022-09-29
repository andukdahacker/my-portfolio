import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import SkillLevel from "./SkillLevel";

const BioTechStack = () => {
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => {
    setHidden(!hidden);
  };
  return (
    <div>
      <div className="mb-5 text-center">Công nghệ sử dụng</div>
      <div className="flex items-center justify-center ">
        <div className="w-24 ">ReactJS</div>
        <SkillLevel level="AVERAGE" />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-24">NodeJS</div>
        <SkillLevel level="AVERAGE" />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-24">GraphQL</div>
        <SkillLevel level="BASIC" />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-24">Prisma</div>
        <SkillLevel level="AVERAGE" />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-24">Docker</div>
        <SkillLevel level="BASIC" />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-24">Typescript</div>
        <SkillLevel level="BASIC" />
      </div>

      <div
        className="absolute cursor-pointer top-3 right-3 "
        onClick={toggleHidden}
      >
        <AiOutlineQuestionCircle />
      </div>
      <AnimatePresence>
        {!hidden ? null : (
          <motion.div
            initial={{ scale: 0.01 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.01 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={` absolute glass-light dark:glass-dark top-10 right-3 w-40 p-2`}
          >
            <div className="flex items-center justify-start w-full text-sm text-center">
              <div className="w-8 h-1 mr-2 bg-green-400"></div>
              <div>Basic</div>
            </div>
            <div className="flex items-center justify-start w-full text-sm text-center">
              <div className="w-8 h-1 mr-2 bg-yellow-400"></div>
              <div>Average</div>
            </div>
            <div className="flex items-center justify-start w-full text-sm text-center">
              <div className="w-8 h-1 mr-2 bg-orange-400"></div>
              <div>Intermediate</div>
            </div>
            <div className="flex items-center justify-start w-full text-sm text-center">
              <div className="w-8 h-1 mr-2 bg-red-400"></div>
              <div>Pro</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BioTechStack;
