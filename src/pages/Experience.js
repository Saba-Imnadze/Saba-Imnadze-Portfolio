import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { SiJavascript } from "react-icons/si";
import { GoLaw } from "react-icons/go";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#393053">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2015"
          iconStyle={{ background: "#635985", color: "#fff" }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title">
            My University, University of Georgia,Tbilisi
          </h3>
          <p>Bachelors degry in Low</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2017"
          iconStyle={{ background: "#635985", color: "#fff" }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title">
            Masters degry in Criminal Law, Georgian state university(TSU)
          </h3>
          <p>Masters degry in Low</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2022"
          iconStyle={{ background: "#D21312", color: "#fff" }}
          icon={<GoLaw />}
        >
          <h3 className="vertical-timeline-element-title">
            Georgian Bar Ssosiation
          </h3>
          <p>Criminal law atornay</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 -"
          iconStyle={{ background: "gold", color: "#fff" }}
          icon={<SiJavascript />}
        >
          <h3 className="vertical-timeline-element-title">
            Self taught web developer
          </h3>
          <p>ReactJS</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
