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
      <Native />
      <Feature />
      {/* <Advert /> */}
      <News />
      <TopCategory />
    </div>
  );
};

export default Home;
