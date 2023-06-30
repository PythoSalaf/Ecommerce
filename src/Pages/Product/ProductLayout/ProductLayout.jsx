import React from "react";
import {
  Brands,
  Information,
  RandomProduct,
  ShopCategory,
} from "../../../Components";
import Products from "../Products/Products";
import "./ProductLayout.css";

const ProductLayout = () => {
  return (
    <div className='product-layout-page'>
      <div className="product-layout-container">
        <div className="product-layout-side-bar">
          <ShopCategory />
          <Brands />
          <Information />
          <RandomProduct />
        </div>
        <div className="product-layout-content">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
