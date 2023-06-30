import React from "react";
import { Navbar, SearchBar, TopBar } from "../../Components";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <TopBar />
      <SearchBar />
      <div className="horizontal">
        <hr />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
