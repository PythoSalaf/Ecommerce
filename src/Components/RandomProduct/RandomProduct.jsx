import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRandomProducts } from "../../Features/ProductSlice";
import Star from "../Star/Star";
import "./RandomProduct.css";

const RandomProduct = () => {
 
  const dispatch = useDispatch();
  const randomProduct = useSelector( (state) => state.products.randomProducts);

  useEffect(() => {
    dispatch(setRandomProducts());
  }, [dispatch]);


  return (
    <div className="random-container">
      <h2 className="random-title">Random products</h2>
      <div className="">
        {randomProduct.map(({ id, avatar, name, price }) => (
          <div key={id} className="random-item">
            <img src={avatar} alt={`avatar-name`} className="random-avatar" />
            <div className="random-content">
              <h3 className="random-name">{name}</h3>
              <Star size={18} />
              <h3 className="random-price">#{price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomProduct;
