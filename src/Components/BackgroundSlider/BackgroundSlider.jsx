import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackgroundSlider.css";

const BackgroundSlider = () => {
  const navigate = useNavigate()
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Experience the Latest Tech Marvels at Gadget Hub - Redefining the  <br /> 
          Way You Interact with Technology!
        </h1>
        <p>
          Revolutionize Your Lifestyle with the Latest Tech Trends - Elevate
          Your Everyday with our Iconic Gadgets
        </p>
      </div>
      <div className="hero-btn-container">
      <button className="hero-btn-show" onClick={() => navigate('/products')} >Show more</button>
      <button className="hero-btn-learn" onClick={() => navigate('/about')} >learn more</button>
      </div>
    </div>
  );
};

export default BackgroundSlider;
