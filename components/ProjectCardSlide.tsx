import { Autoplay, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ProjectData } from "../utils/types";

interface ProjectCardSlideProps {
  data: ProjectData;
}

const ProjectCardSlide = ({ data }: ProjectCardSlideProps) => {
  return (
    <div className="w-2/5 h-full bg-red-200">
      <Swiper
        modules={[Autoplay, Mousewheel, Pagination]}
        direction="horizontal"
        mousewheel={{ forceToAxis: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="w-full h-full bg-blue-200"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-yellow-200"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default ProjectCardSlide;
