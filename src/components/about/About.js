import React from "react";
import "./About.css";
import { FaVuejs,FaReact,FaPhp,FaGitAlt,FaLaravel } from "react-icons/fa";

const About = () => {
  return (
    <div className="container_about">
      <p className="about_me">
        I'm a junior developer with next year of experience.
      </p>
      <p className="about_me">
        work as a freelancer using php and javascript based technologies
        </p>

      <div>
    <ul className="container_icon">
        <li>
          <FaVuejs color="#3ded97"/>
        </li>
        <li>
        <FaReact color="#61dbfb"/>
        </li>
        <li>
        <FaLaravel color="#fb503b"/>
        </li>
        <li>
        <FaGitAlt color="#f34f29"/>
        </li>
        <li>
        <FaPhp color="#474a8a"/>
        </li>
    </ul>
      </div>
    


    </div>
  );
};

export default About;
