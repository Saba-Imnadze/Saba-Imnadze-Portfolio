import React from "react";
import "../styles/Projects.css";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

const Projects = () => {
  return (
    <div className="projects">
      <h1
        style={{
          fontFamily: "Poppins, sans-serif",
          color: "#443C68",
          marginBottom: "50px",
          fontSize: "40px",
          letterSpacing: "2px",
        }}
      >
        {" "}
        My Personal Projects
      </h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              id={idx}
              name={project.name}
              image={project.image}
              url={project.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
