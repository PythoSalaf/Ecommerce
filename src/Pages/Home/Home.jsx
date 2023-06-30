import React from "react";
import {
  Advert,
  BackgroundSlider,
  Feature,
  Native,
  News,
  TopCategory,
} from "../../Components";
import "./Home.css";
const Home = () => {
  return (
    <div className="app__home">
      <BackgroundSlider />
      <Advert />
      <Native />
      <Feature />
      <News />
      <TopCategory />
    </div>
  );
};

export default Home;
