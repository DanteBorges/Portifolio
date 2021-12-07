import React from "react";
import "./Portifolio.css";
import ImageSlider from "../sliderbar/ImageSlider.js";
import { SliderData } from "../sliderbar/SliderData.js";

import { FaGithub } from "react-icons/fa";

const portifolio = () => {
  return (
    <div>
      <a href="https://github.com/DanteBorges" target="_blank">
        <div className="background_icon">
          <div className="icon_github">
            <FaGithub color="black" />
          </div>
        </div>
      </a>
      <ImageSlider slides={SliderData} />
    </div>
  );
};

export default portifolio;
