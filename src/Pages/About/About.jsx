import React from "react";
import { banner } from "../../Assets";
import { Native, News } from "../../Components";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-top">
        <img src={banner} alt="about-banner" />
        <div className="top-content">
          <h1 className="top-content-title">about gadgethub</h1>
          <p className="top-content-text">
            Welcome to Gadget Hub, your ultimate destination for cutting-edge{" "}
            <br />
            technology and innovation! We are passionate about bringing you the{" "}
            <br />
            latest gadgets and electronics to enhance your lifestyle.
          </p>
        </div>
      </div>
      <Native />
      <div className="about-bottom">
        <h2 className="about-bottom-title">Our Company</h2>
        <p className="about-bottom-text">
          Welcome to Gadget Hub, your ultimate destination for cutting-edge
          technology and innovation! We are passionate about bringing you the
          latest gadgets and electronics to enhance your lifestyle.
        </p>
        <p className="about-bottom-text">
          At Gadget Hub, we understand that technology plays a vital role in our
          daily lives. That's why we strive to curate a diverse range of
          high-quality products that cater to tech enthusiasts, early adopters,
          and gadget lovers alike. From smartphones and tablets to smart home
          devices and wearables, we've got you covered with the most
          sought-after gadgets on the market.
        </p>
        <p className="about-bottom-text">
          What sets Gadget Hub apart is our unwavering commitment to delivering
          an exceptional shopping experience. We pride ourselves on offering a
          seamless online platform that is user-friendly, secure, and backed by
          excellent customer service. Our dedicated team of tech-savvy
          professionals is here to assist you every step of the way, ensuring
          your satisfaction from browsing to checkout and beyond.
        </p>
      </div>
      <News />
      <div className="about-bottom">
        <h2 className="about-bottom-title">Our believe</h2>
        <p className="about-bottom-text">
          We believe that staying ahead in the fast-paced world of technology
          requires constant evolution. That's why we continuously update our
          product selection to feature the latest releases, trends, and
          innovations. Our rigorous quality assurance process guarantees that
          every product we offer meets the highest standards of performance and
          reliability.
        </p>
        <p className="about-bottom-text">
          At Gadget Hub, we value our customers and their trust in us. We strive
          to foster long-lasting relationships by providing competitive prices,
          hassle-free returns, and timely delivery. We understand that
          purchasing gadgets is an investment, and we want you to feel confident
          and excited about your choices.
        </p>
        <p className="about-bottom-text">
          Join us on this incredible journey as we explore the realm of gadgets
          and discover the possibilities they unlock. Whether you're a tech
          enthusiast, a professional seeking productivity tools, or someone who
          simply enjoys the thrill of new gadgets, Gadget Hub is your go-to
          destination. Thank you for choosing Gadget Hub as your trusted source
          for all things tech. We look forward to serving you and exceeding your
          expectations at every turn. 
        </p>
          <span className="span-text">Welcome to the Gadget Hub family!</span>
      </div>
    </div>
  );
};

export default About;
