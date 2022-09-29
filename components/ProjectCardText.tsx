import { useState } from "react";
import { IconType } from "react-icons";
import { ProjectData, TechDetails } from "../utils/types";
import Modal from "./Modal";
import ProjectTechDetails from "./ProjectTechDetails";

interface ProjectCardTextProps {
  data: ProjectData;
}

const ProjectCardText = ({ data }: ProjectCardTextProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [techDetailsData, setTechDetailsData] = useState<TechDetails | null>(
    null
  );
  const projectName = data.projectName;
  const idea = data.idea;
  const date = data.date;
  let techList: TechDetails[] = [];

  data.architecture.forEach((tech) => {
    for (const [key, value] of Object.entries(tech)) {
      value.forEach((val) => {
        techList.push(val);
      });
    }
  });

  const openModal = (index: number) => {
    setModalOpen(true);
    setTechDetailsData(techList[index]);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col justify-around w-3/5 h-full p-5 ">
      <h1>{projectName}</h1>
      <div>{idea}</div>
      <div>
        <div className="mb-2">Technology I used:</div>
        <div className="flex">
          {techList.map((tech, index) => {
            const icon = tech.icon;
            return (
              <div
                key={index}
                className="relative mr-2 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div>{icon({ color: tech.bgColor, size: "30" })}</div>
              </div>
            );
          })}
        </div>

        <Modal isOpen={modalOpen} onRequestClose={closeModal}>
          <ProjectTechDetails data={techDetailsData} />
        </Modal>
      </div>
    </div>
  );
};

export default ProjectCardText;
