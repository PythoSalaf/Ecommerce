import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackgroundSlider.css";
import { herobg } from "../../Assets";

const BackgroundSlider = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1>
            Experience the Latest Tech Marvels at Gadget Hub Redefining the Way
            You Interact with Technology!
          </h1>
          <p>
            Revolutionize Your Lifestyle with the Latest Tech Trends - Elevate
            Your Everyday with our Iconic Gadgets
          </p>

          <div className="hero-left-btn-container">
            <button
              className="hero-left-btn"
              onClick={() => navigate("products")}
            >
              shop now
            </button>
            <button className="hero-left-btn" onClick={() => navigate("about")}>
              learn more
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img src={herobg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
