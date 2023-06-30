import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Star.css";

const Star = ( {size} ) => {
  return (
    <div className="star">
      <AiFillStar size={size} color="orange" />
      <AiFillStar size={size} color="orange" />
      <AiFillStar size={size} color="orange" />
      <AiFillStar size={size} color="orange" />
      <AiFillStar size={size} color="orange" />
    </div>
  );
};

export default Star;
