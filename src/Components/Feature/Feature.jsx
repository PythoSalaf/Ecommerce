import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductCard } from "../../Components";
import { productItems } from "../../Pages/Product/ProductData";
import "./Feature.css";

const Feature = () => {
  const newProduct = productItems.filter((product) => product.type === "new");
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="app__feature">
      <div className="feature-content">
        <h1 className="feature-title">top new products</h1>
        <h4 className="feature-text">Here is our Newly Arrival Products</h4>
      </div>
      <div className="feature-carousel-container">
        <Slider {...settings}>
          {newProduct.map((data) => (
            <div key={data.id} className="feature-container">
              <ProductCard {...data} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feature;
