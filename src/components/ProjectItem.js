import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ image, name, id, url }) => {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage"
      ></div>
      <h1 style={{ color: "#443C68" }}>{name}</h1>
      <button className="btn">{url}</button>
    </div>
  );
};

export default ProjectItem;
