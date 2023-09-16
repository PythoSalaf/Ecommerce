import React from "react";
import { Link } from "react-router-dom";
import { Star } from "../../Components";
import "./FeatureCard.css";

const FeatureCard = ({ id, avatar, name, price, discribe, copies, type }) => {
  return (
    <div className="feature-card-container">
      <Link to={`/product/${id}`} className="feature-link">
        <div className="featurecard-avatar">
          <img src={avatar} alt={`avatar${id}`} />
        </div>
        <div className="featurecard-content">
          <h2 className="card-content-name">{name}</h2>
          <p className="card-content-text">{discribe}</p>
          <div className="price-container">
            <h3 className="card-content-price">#{price.toLocaleString()}</h3>
            <p className="card-content-copies">{copies}</p>
          </div>
          <Star size={17} />
        </div>
      </Link>
      <div className="featurecard-btn-container">
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default FeatureCard;
