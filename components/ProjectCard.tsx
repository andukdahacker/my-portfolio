import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { ProjectData } from "../utils/types";
import ProjectCardSlide from "./ProjectCardSlide";
import ProjectCardText from "./ProjectCardText";

interface ProjectCardProps {
  data: ProjectData;
  layout: "big" | "small";
  isChildrenDiv?: boolean;
  index?: number;
}

const ProjectCard = ({
  data,
  layout,
  index,
  isChildrenDiv,
}: ProjectCardProps) => {
  const projectName = data.projectName;
  const idea = data.idea;
  const date = data.date;
  let iconList: IconType[] = [];
  let colorIconList: string[] = [];
  data.architecture.forEach((tech) => {
    for (const [key, value] of Object.entries(tech)) {
      value.forEach((val) => {
        iconList.push(val.icon);
        colorIconList.push(val.bgColor);
      });
    }
  });

  const isOdd = (num: number) => {
    return num % 2;
  };

  const iconLimit = 8;

  const projectCardVariants: Variants = {
    leftCardInit: {
      x: -100,
      opacity: 0,
    },
    rightCardInit: {
      x: 100,
      opacity: 0,
    },
    leftCardAnimate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
    rightCardAnimate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
    leftCardExit: {
      x: -100,
      opacity: 0,
    },
    rightCardExit: {
      x: -100,
      opacity: 0,
    },
  };

  if (layout == "small") {
    return (
      <div
        className={
          isChildrenDiv
            ? "flex items-center justify-center h-full w-full"
            : "flex items-center justify-center w-screen h-screen snap-start"
        }
      >
        <Link href={`/projects/${projectName}`}>
          <a
            style={{ width: `${isChildrenDiv ? "83.333333%" : "20rem"}` }}
            className="h-64 overflow-hidden glass-light rounded-xl dark:glass-dark"
          >
            <div className="w-full h-2/3 ">
              <Image src={""} alt={"projectImage"} />
            </div>
            <div className="flex flex-col w-full p-2 h-1/3 justify-evenly">
              <div className="flex justify-between">
                <div className="text-xl font-bold">{projectName}</div>
                <span>{date}</span>
              </div>
              <div className="">
                {idea.length > 20 ? `${idea.slice(0, 20)}...` : idea}
              </div>

              {iconList.length > iconLimit ? (
                <div className="flex">
                  <div className="flex">
                    {iconList.splice(0, iconLimit).map((icon, index) => {
                      return (
                        <div key={index} className="mr-2">
                          {icon({ size: 21, color: colorIconList[index] })}
                        </div>
                      );
                    })}
                  </div>
                  <div className="px-1 text-gray-700 bg-gray-500 rounded-xl">
                    {iconList.length - iconLimit}+
                  </div>
                </div>
              ) : (
                <div className="flex items-center">
                  {iconList.map((icon, index) => {
                    return (
                      <div key={index} className="mr-2">
                        {icon({ size: 21, color: colorIconList[index] })}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </a>
        </Link>
      </div>
    );
  }

  if ((layout == "big" && index) || (layout == "big" && index == 0)) {
    return (
      <motion.div
        key={data.projectName}
        variants={projectCardVariants}
        initial={isOdd(index) ? "rightCardInit" : "leftCardInit"}
        whileInView={isOdd(index) ? "rightCardAnimate" : "leftCardAnimate"}
        className="flex items-center justify-center w-screen h-screen snap-start "
      >
        <div className="flex w-5/6 h-80 lg:h-[29rem] glass-light rounded-lg dark:glass-dark overflow-hidden">
          {isOdd(index) === 0 ? (
            <>
              <ProjectCardSlide data={data} />
              <ProjectCardText data={data} />
            </>
          ) : (
            <>
              <ProjectCardText data={data} />
              <ProjectCardSlide data={data} />
            </>
          )}
        </div>
      </motion.div>
    );
  }

  return null;
};

export default ProjectCard;
