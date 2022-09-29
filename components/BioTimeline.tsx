import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const BioTimeline = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-2">
        <div className="text-md ">Kinh nghiệm</div>
      </div>
      <VerticalTimeline layout={"1-column-left"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "cyan", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid cyan",
          }}
          date="2011 - present"
          iconStyle={{ background: "cyan", color: "#fff" }}
        >
          <div className="flex"></div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "cyan", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid cyan",
          }}
          date="2011 - present"
          iconStyle={{ background: "cyan", color: "#fff" }}
        >
          <div className="flex"></div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "cyan", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid cyan",
          }}
          date="2011 - present"
          iconStyle={{ background: "cyan", color: "#fff" }}
        >
          <div className="flex"></div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "cyan", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid cyan",
          }}
          date="2011 - present"
          iconStyle={{ background: "cyan", color: "#fff" }}
        >
          <div className="flex"></div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "cyan", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid cyan",
          }}
          date="2011 - present"
          iconStyle={{ background: "cyan", color: "#fff" }}
        >
          <div className="flex"></div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "cyan", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid cyan",
          }}
          date="2011 - present"
          iconStyle={{ background: "cyan", color: "#fff" }}
        >
          <div className="flex"></div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default BioTimeline;
