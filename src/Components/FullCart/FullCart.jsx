import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch  } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { removeFromCart } from "../../Features/CartSlice";
import "./FullCart.css";

const FullCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { cart, totalAmount, totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="full-cart">
      <h2 className="cart-title">Cart Items</h2>
      <div className="full-cart-container">
        <div className="desktop-cart-left">
          <div className="cart-left-top">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
          </div>
          <hr className="cart-hr" />

          {cart.map((item) => (
            <div key={item.id}>
              <div className="cart-left-bottom">
                <div className="cart-avatar-container">
                  <RxCross2 className="cart-delete-icon" onClick={() => dispatch(removeFromCart(item))} />
                  <div className="cart-avatar">
                    <img src={item.avatar} alt="avatar" />
                  </div>
                  <p className="cart-name">{item.name}</p>
                </div>
                <p className="cart-price">#{item.price.toLocaleString()}.00</p>
                <div className="cart-quantity">
                  <button className="cart-button">-</button>
                  <p className="quantity-amount">1</p>
                  <button className="cart-button">+</button>
                </div>
                <p className="cart-price">
                  #{item.totalPrice.toLocaleString()}.00
                </p>
              </div>
              <hr className="cart-hr" />
            </div>
          ))}
        </div>

        {cart.map((items) => (
          <div className="mobile-cart-view" key={items.id}>
            <div className="mobile-cart-container">
              <div className="mobile-cart">
                <h2>Product</h2>
                <div className="cart-avatar-container">
                  <div className="cart-avatar">
                    <img src={items.avatar} alt="avatar" />
                  </div>
                  <p className="cart-name">{items.name}</p>
                </div>
              </div>
              <div className="mobile-cart">
                <h2>Price</h2>
                <p className="cart-price">#{items.price.toLocaleString()}.00</p>
              </div>

              <div className="mobile-cart">
                <h2>Quantity</h2>
                <div className="cart-quantity">
                  <button className="cart-button">-</button>
                  <p className="quantity-amount">1</p>
                  <button className="cart-button">+</button>
                </div>
              </div>

              <div className="mobile-cart">
                <h2>Subtotal</h2>
                <p className="cart-price">
                  #{items.totalPrice.toLocaleString()}.00
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="full-cart-right">
          <h3 className="cart-summary">cart summary</h3>
          <div className="full-cart-content">
            <h4>No of item</h4>
            <p>{totalAmount}</p>
          </div>
          <div className="full-cart-content">
            <h4>total</h4>
            <p>#{totalPrice.toLocaleString()}.00</p>
          </div>
          <div className="full-cart-btn-container">
            <button
              className="full-cart-btn"
              onClick={() => navigate("/checkout")}
            >
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCart;
