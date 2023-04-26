import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

import { BsLinkedin } from "react-icons/bs";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>Skills: {project.skills}</p>
      <button className="btn">{project.url}</button>
    </div>
  );
};

export default ProjectDisplay;
