import React from "react";
import { Navbar, SearchBar, TopBar } from "../../Components";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <TopBar />
      <SearchBar />
      <Navbar />
    </div>
  );
};

export default Header;
