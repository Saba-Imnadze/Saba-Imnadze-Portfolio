import React from "react";
import "../styles/Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  let iconStyles = { color: "white", fontSize: "1.5rem" };
  return (
    <div className="footer">
      <div className="socialMedia" style={{ marginTop: "3rem" }}>
        <a href="https://www.instagram.com/" target="_blank">
          <BsInstagram style={iconStyles} />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <BsFacebook style={iconStyles} />
        </a>

        <a href="https://twitter.com/" target="_blank">
          <BsTwitter style={iconStyles} />
        </a>

        <a
          href="https://www.linkedin.com/in/saba-imnadze-412764267/"
          target="_blank"
        >
          <BsLinkedin style={iconStyles} />
        </a>
        <a href="https://www.google.com/gmail/about/" target="_blank">
          <SiGmail style={iconStyles} />
        </a>
      </div>
      <p style={{ marginTop: "4rem", marginBottom: "3rem" }}>
        {" "}
        Copyright ©2023 All Rights Reserved | Made By Saba Imnadze
      </p>
    </div>
  );
};

export default Footer;
