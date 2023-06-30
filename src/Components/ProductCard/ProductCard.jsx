import React from "react";
import { Star } from "../../Components";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ id, avatar, name, price, type }) => {
  return (
    <>
      <Link to={`/product/${id}`} className="card-container">
        <div className="productcard-container">
          <div className="productcard-avatar">
            <img src={avatar} alt={`name-${id}`} />
          </div>
          <div className="productcard-content">
            <div className="productcard-title">
              <h2 className="productcard-name">{name}</h2>
              <h3 className="productcard-price">#{price.toLocaleString()}</h3>
            </div>
            <Star size={20} />
          </div>
          <button type="button" className="productcard-btn">
            add to cart
          </button>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
