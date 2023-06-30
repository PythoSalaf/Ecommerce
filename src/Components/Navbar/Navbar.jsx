import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='products'>Top Products</Link>
          <Link to='deals-of-the-day' >Today's Deal</Link>
          <Link to='about' >About us</Link>
          <Link to='contact' >Contact us</Link>
        </nav>
        <div className="nav-contact">
          <FiPhoneCall size={30} />
          <h2 className="nav-text">Call us :</h2>
          <p className="nav-number"> +2348106264297</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
