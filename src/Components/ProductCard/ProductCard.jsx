import React from "react";
import { Star } from "../../Components";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ id, avatar, name, price, type }) => {
  return (
    <>
      <div className="productcard-container">
        <Link to={`/product/${id}`} className="card-container">
          <div className="productcard-avatar">
            <img src={avatar} alt={`name-${id}`} />
          </div>
          <div className="productcard-content">
            <div className="productcard-title">
              <h2 className="productcard-name">{name}</h2>
              <h3 className="productcard-price">#{price.toLocaleString()}</h3>
            </div>
            <Star size={16} />
          </div>
        </Link>
        <button type="button" className="productcard-btn">
          add to cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
