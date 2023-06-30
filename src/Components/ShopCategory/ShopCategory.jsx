import React from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../Features/ProductSlice";
import { topCategoryData } from "../TopCategory/TopCategoryData";
import { Link, useNavigate } from "react-router-dom";
import "./ShopCategory.css";

const ShopCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="shop-category">
        <h2 className="shop-title">shop category</h2>
        {topCategoryData.map((item) => {
          return (
            <ul key={item.id} className="shop-category-options">
              <Link to={"/category/" + item.name}>
                <li
                  className="shop-category-option"
                  onClick={() => dispatch(filterProducts(item))}
                >
                  {item.name}
                </li>
              </Link>
            </ul>
          );
        })}
      </div>
      <div className="mobile-category">
        <h2 className="shop-title">shop category</h2>
        <div className="mobile-category-options">
          {topCategoryData.map((items) => (
            <div className="mobile"key={items.id} >
              <button className="category-btn" onClick={() => navigate("/category/" + items.name)}>
                {items.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
