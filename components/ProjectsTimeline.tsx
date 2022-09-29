import { useTheme } from "next-themes";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { timelineData } from "../utils/timelineData";

const ProjectsTimeline = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full h-full min-h-screen">
      <div className="text-4xl font-bold text-center uppercase ">
        My coding journey
      </div>
      <VerticalTimeline lineColor={theme == "light" ? "black" : "white"}>
        {timelineData.map((data, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "cyan", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid cyan",
              }}
              date="2011 - present"
              iconStyle={{ background: "cyan", color: "#fff" }}
            >
              <div className="flex">
                {data.icon.map((icon, index) => {
                  return (
                    <div key={index} className="mr-2">
                      {icon({ size: 20, color: "black" })}
                    </div>
                  );
                })}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default ProjectsTimeline;
