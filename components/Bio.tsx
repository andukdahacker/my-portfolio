import BioTimeline from "./BioTimeline";
import BioProfileCard from "./BioProfileCard";
import BioTechStack from "./BioTechStack";
import BioProjects from "./BioProjects";
import BioCertificate from "./BioCertificate";
import { motion } from "framer-motion";

const Bio = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center ">
      <div className="mb-2 text-4xl font-bold text-center uppercase ">
        My profile
      </div>
      <motion.div className="grid w-4/5 grid-flow-row gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-around order-1 h-full p-2 rounded-xl sm:row-span-2 md:row-span-1 glass-light dark:glass-dark">
          <BioProfileCard />
        </div>
        <div className="order-2 overflow-y-scroll sm:h-64 md:h-80 lg:h-[33rem] max-h-[33rem] rounded-xl glass-light dark:glass-dark lg:row-span-2">
          <BioTimeline />
        </div>
        <div className="relative flex flex-col items-center justify-center order-3 p-2 lg:order-4 rounded-xl glass-light dark:glass-dark">
          <BioTechStack />
        </div>
        <div className="flex flex-col items-center justify-center order-4 w-full p-2 lg:order-3 rounded-xl h-fit md:h-full md:row-span-2 lg:row-span-1 glass-light dark:glass-dark">
          <BioProjects />
        </div>
        <div className="order-5 p-2 rounded-xl glass-light dark:glass-dark">
          <BioCertificate />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Bio;
