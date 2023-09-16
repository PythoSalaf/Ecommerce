import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRandomProducts } from "../../Features/ProductSlice";
import Star from "../Star/Star";
import "./RandomProduct.css";

const RandomProduct = () => {
  const dispatch = useDispatch();
  const randomProduct = useSelector((state) => state.products.randomProducts);

  useEffect(() => {
    dispatch(setRandomProducts());
  }, [dispatch]);

  return (
    <div className="random-container">
      <h2 className="random-title">Random products</h2>
      <div className="">
        {randomProduct.map(({ id, avatar, name, price }) => (
          <div key={id} className="random-item">
            <div className="radom-avatar-container">
              <img src={avatar} alt={`avatar-name`} className="random-avatar" />
            </div>
            <div className="random-content">
              <h3 className="random-name">{name}</h3>
              <Star size={16} />
              <h3 className="random-price">#{price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomProduct;
