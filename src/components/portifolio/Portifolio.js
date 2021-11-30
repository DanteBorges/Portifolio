import React from "react";
import "./Portifolio.css";
import ImageSlider from '../sliderbar/ImageSlider.js';
import { SliderData } from '../sliderbar/SliderData.js'

import { FaGithub } from "react-icons/fa";

const portifolio = () => {
  return (
    <div>
      <div className="background_icon">
        <div className="icon_github">
          <FaGithub />
        </div>
      </div>

      <div className="containers_repository">
      <ImageSlider slides={SliderData} />
      </div>
    </div>
  );
};

export default portifolio;
