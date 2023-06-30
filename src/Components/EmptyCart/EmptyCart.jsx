import React from "react";
import { empty } from "../../Assets";
import { useNavigate } from "react-router-dom";
import "./EmptyCart.css";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-cart">
      <div className="empty-cart-top">
        <img src={empty} alt="empty" />
      </div>
      <div className="empty-cart-bottom">
        <h3 className="empty-cart-title">
          your cart is <span>empty!</span>
        </h3>
        <p className="empty-cart-text">
          Uh-oh! It seems like your cart is empty at the moment. But don't 
          worry, there's a whole world of amazing products waiting for you. 
          Start exploring now and fill your cart with fantastic products
        </p>
        <button
          className="empty-cart-btn"
          onClick={() => navigate("/products")}
        >
          continue shopping
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
