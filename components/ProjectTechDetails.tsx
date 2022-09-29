import { TechDetails } from "../utils/types";

interface ProjectTechDetailsProps {
  data: TechDetails | null;
}

const ProjectTechDetails = ({ data }: ProjectTechDetailsProps) => {
  if (data == null) return null;
  return (
    <div className="mt-5">
      <div className="flex items-center justify-start w-fit">
        <div
          style={{
            backgroundColor: `${data.bgColor}`,
            color: `${data.txtColor}`,
          }}
          className={` text-white p-2 rounded-md font-semibold`}
        >
          {data.name}
        </div>
        <div className="ml-2">
          {data.icon({ size: 30, color: data.bgColor })}
        </div>
      </div>
      <div className="mt-2">
        <div>Description: {data.intro}</div>

        <div>Why I chose: {data.purpose} </div>
      </div>
    </div>
  );
};

export default ProjectTechDetails;
