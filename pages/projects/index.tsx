import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";
import { projectData } from "../../utils/projectData";

const Projects = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  const data = projectData;

  return (
    <Layout>
      <div className="flex items-center justify-center w-full h-full">
        <div
          style={{ paddingTop: `${screenWidth < 600 ? "4rem" : "0"}` }}
          className="w-screen h-screen overflow-scroll snap-mandatory snap-y"
        >
          {data.map((project, index) => {
            return (
              <ProjectCard
                data={project}
                key={index}
                layout={screenWidth < 600 ? "small" : "big"}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
