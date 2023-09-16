import React from "react";
import Data from "./AdvertData";
import { Link } from "react-router-dom";
import "./Advert.css";
const Advert = () => {
  return (
    <div className="home__advert">
      <div className="home__advert-container">
        {Data.map((data) => (
          <div key={data.id} className="home__advert-data-container">
            <div className="advert-container">
              <div className="advert-content">
                <p>{data.discount}</p>
                <h3>{data.description}</h3>

                <Link className="content-link">Shop Now</Link>
              </div>
              <div className="advert-img-container">
                <img
                  src={data.img}
                  alt={`data-${data.id}`}
                  className="advert-img"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advert;
