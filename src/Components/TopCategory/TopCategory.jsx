import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { topCategoryData } from "./TopCategoryData";
import { Link } from "react-router-dom";
import "./Topcategory.css";

const TopCategory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          dots: true,
          draggable: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="top-category-container">
      <div className="category-contents">
        <h1 className="category-title">Our top categories</h1>
      </div>
      <div className="top-category-slider">
        <Slider {...settings}>
          {topCategoryData.map((items) => (
            <Link to={'/category/' + items.name} className="category-container" key={items.id}>
              <div className="category-img">
                <img src={items.img} alt={`cate-${items.name}`} />
              </div>
              <h4 className="category-name">{items.name}</h4>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopCategory;
