import { Autoplay, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { projectData } from "../utils/projectData";
import ProjectCard from "./ProjectCard";

const BioProjects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="">Dự án</div>
      <Swiper
        modules={[Autoplay, Mousewheel, Pagination]}
        direction={"vertical"}
        mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-64 mt-2 w-80 sm:w-full"
      >
        {projectData.map((project, index) => {
          return (
            <SwiperSlide
              className="flex items-center justify-center "
              key={index}
            >
              <ProjectCard
                data={project}
                key={index}
                layout="small"
                isChildrenDiv={true}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BioProjects;
