import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { SiGithub } from "react-icons/si";
import { ProjectData } from "../utils/types";
import LearningPointMain from "./LearningPointMain";
import ProjectArchitecture from "./ProjectArchitecture";

interface ProjectProps {
  data: ProjectData;
}

const Project = ({ data }: ProjectProps) => {
  const router = useRouter();

  const projectName = data.projectName;
  const idea = data.idea;
  const architecture = data.architecture;
  const learningPoints = data.learningPoints;
  const date = data.date;

  return (
    <div className="w-full sm:w-10/12 md:w-2/3 lg:w-1/2 mx-auto h-fit min-h-screen pt-16">
      <button type="button" onClick={() => router.back()} className="my-2">
        Back
      </button>
      <div className="glass-light dark:glass-dark w-full rounded-xl">
        <div className="bg-blue-200 h-80 w-full rounded-t-xl overflow-hidden ">
          <Image src={""} alt={"projectImage"} />
        </div>

        <div className="p-4">
          <div className=" mt-5 flex justify-between items-center">
            <h1 className="uppercase">{projectName}</h1>
            <div>{date}</div>
          </div>
          <div className="mt-10 ">
            <h2>Idea</h2>
            <div className="dashed-box">{idea}</div>
          </div>
          <div className="mt-10">
            <h2>Architecture</h2>
            <div>
              {architecture.map((domain, index) => {
                return <ProjectArchitecture data={domain} key={index} />;
              })}
            </div>
          </div>

          <div className="mt-10">
            <h2>Learning points</h2>
            <div>
              {learningPoints.map((domain, index) => {
                return <LearningPointMain data={domain} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
