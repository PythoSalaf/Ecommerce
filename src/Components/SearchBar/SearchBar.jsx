import React, { useEffect, useState } from "react";
import { BsCart4, BsSearch } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { VscThreeBars, VscChromeClose } from "react-icons/vsc";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SearchBar.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const handleFocus = () => setExpand(true);
  const handleBlur = () => setExpand(false);
  const handleToggle = () => setToggle(!toggle);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={isFixed ? "fixed-search-bar" : "normal-search-bar"}>
        <div className="search-bar-container">
          <div className="search__bar-logo">
            <h2>GadgetHub</h2>
          </div>
          <div className="search__container">
            <input
              type="search"
              placeholder="search for products..."
              className={expand ? "search-box-expand" : "search-box"}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <div className="search-icon">
              <BsSearch size={20} color="white" />
            </div>
          </div>
          <div className="icons-container">
            <Link className="login-link">
              <RxAvatar size={38} color="#082647" />
            </Link>
            <div className="cart-icon" onClick={() => navigate("/cart")}>
              <BsCart4 size={34} color="#082647" />
              <span className="icon-title">{totalAmount}</span>
            </div>
            <div>
              <HiOutlineHeart size={34} />
            </div>
          </div>
        </div>
      </div>

      {/* --------------- MOBILE VIEW------------------- */}

      <div
        className={
          isFixed ? "fixed-mobile-search-bar" : "normal-mobile-search-bar"
        }
      >
        <div className="search__bar-mobile-container">
          <div className="mobile-logo-container">
            {toggle ? (
              <VscChromeClose
                size={30}
                color="#082647"
                onClick={handleToggle}
              />
            ) : (
              <VscThreeBars size={30} color="#082647" onClick={handleToggle} />
            )}
            <Link to="/" className="mobile-logo">
              GadgetHub
            </Link>
          </div>
          <div className="mobile__icons-container">
            <BsSearch
              size={23}
              color="#082647"
              onClick={() => setOpenSearch(!openSearch)}
            />
            <div className="cart-icon" onClick={() => navigate("/cart")}>
              <BsCart4 size={26} color="#082647" />
              <span className="icon-title">{totalAmount}</span>
            </div>
          </div>
        </div>
        {/* <div className={isFixed ? "fixed-mobile-search" : "normal-mobile-search" }>
         {
          openSearch && <div>
             <input type="text" />
             <VscChromeClose size={30} color="#082647" onClick={() => setOpenSearch(!openSearch)} />
          </div>
         }
        </div> */}
        <div>
          {toggle && (
            <div
              className={
                isFixed
                  ? "fixed-mobile-menu-container"
                  : "mobile-menu-container"
              }
            >
              <div className="mobile-menu">
                <Link to={"/"} onClick={() => setToggle(!toggle)}>
                  Home
                </Link>
                <Link to={"/products"} onClick={() => setToggle(!toggle)}>
                  Top Products
                </Link>
                <Link
                  to={"/deals-of-the-day"}
                  onClick={() => setToggle(!toggle)}
                >
                  Today's Deal
                </Link>
                <Link to={"/about"} onClick={() => setToggle(!toggle)}>
                  About us
                </Link>
                <Link to={"/contact"} onClick={() => setToggle(!toggle)}>
                  Contact us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
