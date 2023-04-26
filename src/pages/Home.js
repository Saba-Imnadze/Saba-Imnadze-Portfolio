import React from "react";
import "../styles/Home.css";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Home = () => {
  let iconStyles = { color: "#fff", fontSize: "2rem" };
  return (
    <div className="home">
      <div className="about">
        <h2>Hello, My Name is Saba Imnadze</h2>
        <div className="prompt">
          <p
            style={{
              fontFamily: "Roboto Slab, sans-serif",
              letterSpacing: "2px",
            }}
          >
            self taught react web developer
          </p>
          <div className="socialMedia">
            <a
              href="https://www.linkedin.com/in/saba-imnadze-412764267/"
              target="_blank"
            >
              <BsLinkedin style={iconStyles} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook style={iconStyles} />
            </a>
            <a href="https://www.google.com/gmail/about/" target="_blank">
              <SiGmail style={iconStyles} />
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, BootStrap </span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>JAVASCRIPT</span>
          </li>
          <li className="item">
            <h2>React Skills</h2>
            <span>
              {" "}
              HTML + CSS, JSX, JavaScript Fundamentals + ES6, Node + npm, GitHub
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
