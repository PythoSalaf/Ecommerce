import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="app__footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-title">Categories</h2>
          <div className="footer-text">
            <p>Mobiles</p>
            <p>Laptops</p>
            <p>Speakers</p>
            <p>Headsets</p>
          </div>
        </div>
        <div className="footer-content">
          <h2 className="footer-title">Our Company</h2>
          <div className="footer-text">
            <p>Mobiles</p>
            <p>Laptops</p>
            <p>Speakers</p>
            <p>Headsets</p>
          </div>
        </div>
        <div className="footer-content">
          <h2 className="footer-title">Information</h2>
          <div className="footer-text">
            <p>Delivery</p>
            <p>Legal Notice</p>
            <p>Secure Payment</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="footer-content">
          <h2 className="footer-title">Contact</h2>
          <div className="footer-text">
            <p> P17AT15</p>
            <p>42 Puffin street 12345 Puffinville France</p>
            <p>Phone: 234-810-6264-297</p>
            <p>Email: alfaheed1010@gmail.com</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copy-right">
        <h3 className="footer-copy-right-content">
          Design & Developed by PythoSalaf
        </h3>
        <p className="footer-copy-right-text">
          &#169; 2023 Copyright , All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
