import { ArchitectureContent } from "../utils/types";
import ProjectTechDetails from "./ProjectTechDetails";

interface ProjectArchitectureProps {
  data: ArchitectureContent;
}

const ProjectArchitecture = ({ data }: ProjectArchitectureProps) => {
  const render = () =>
    Object.entries(data).map((val, index) => {
      return (
        <div
          key={index}
          className="border border-dashed border-black dark:border-[#cbcbcb] rounded-xl p-2 mt-2"
        >
          <div className="text-xl my-2 font-bold text-center">{val[0]}</div>
          <div className="">
            {val[1].map((tech, index) => {
              return <ProjectTechDetails data={tech} key={index} />;
            })}
          </div>
        </div>
      );
    });
  return <div>{render()}</div>;
};

export default ProjectArchitecture;
