import React from "react";
import { Link } from "react-router-dom";
import { Address } from "../../Components";
import { useSelector } from "react-redux";
import { IoDiscSharp } from "react-icons/io5";
import { american, mastercard, paypal, visa } from "../../Assets";
import "./Checkout.css";

const Checkout = () => {
  const { cart, totalAmount, totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-left">
          <Link to={"/"} className="checkout-left-title">
            Gadget hub
          </Link>
          <p className="checkout-left-text">
            Thank you for choosing <span>GadgetHub</span> your trusted partner
            for all things in tech
          </p>
          <div className="checkout-order-container">
            <h2 className="checkout-order-title">Your Order</h2>
            <div className="checkout-order-top">
              <h2>Product</h2>
              <h2>Subtotal</h2>
            </div>

            <div className="checkout-order-right">
              {cart.map((data) => (
                <div className="checkout-items" key={data.id}>
                  <h4>{data.name}</h4>
                  <p>#{data.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
            <div className="checkout-total">
              <h4>Total price</h4>
              <p>#{totalPrice.toLocaleString()}</p>
            </div>
            <div className="checkout-total">
              <h4>Amount</h4>
              <p>{totalAmount}</p>
            </div>
          </div>
          <div className="checkout-address">
            <Address />
          </div>
        </div>

        <div className="checkout-right">
          <h2 className="checkout-right-title">Payment Methods</h2>
          <div className="checkout-right-payment">
            <div className="right-payment-title">
              <IoDiscSharp size={20} color="#082647" />
              <p>credit card</p>
            </div>
            <div className="right-payment-icon">
              <img src={visa} alt="visa" />
              <img src={mastercard} alt="mastercard" />
              <img src={american} alt="american" />
            </div>
          </div>
          <div className="checkout-payment-field">
            <input
              type="text"
              placeholder="card number"
              pattern="[0-9]{13, 16}"
              maxLength={16}
              required
            />
            <input type="text" placeholder="name on card" />
            <div className="payment-field">
              <input type="text" placeholder="Expiration date (MM/YY)" />
              <input type="text" placeholder="security code" />
            </div>
          </div>
          <div className="checkout-right-bottom">
            <div className="checkout-circle"></div>
            <img src={paypal} alt="paypal" />
          </div>
          <button className="right-checkout-btn">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
