import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductCard, ShopCategory } from "..";
import { banner1 } from "../../Assets";
import "./CategoryProduct.css";

const CategoryProduct = () => {
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(null);
  const { products } = useSelector((state) => state.products);
  console.log("products", products);
  const { category } = useParams();
  console.log("params", category);
  const filterProduct = products.filter(
    (product) => product.category === category
  );
  console.log("filteredProducts", filterProduct);

  return (
    <div className="category">
      <div className="container">
        <div className="left-container">
          <ShopCategory />
          <section>
            <h2 className="left-title">filter by price</h2>
            <div className="left-filter">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={10000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </section>
          <section>
            <h2 className="left-title">sort by</h2>
            <div className="sort">
              <input
                type="radio"
                value="desc"
                id="desc"
                name="price"
                onChange={(e) => setSort("desc")}
                className="sort-input"
              />
              <label htmlFor="desc" className="sort-label">
                Price (lowest first)
              </label>
            </div>
            <div className="sort">
              <input
                type="radio"
                value="asc"
                id="asc"
                name="price"
                onChange={(e) => setSort("asc")}
                className="sort-input"
              />
              <label htmlFor="asc" className="sort-label">
                Price (highest first)
              </label>
            </div>
          </section>
        </div>

        <div className="right-container">
          <div className="baner-bg">
            <img src={banner1} alt="banner" />
            <div className="baner-content">
              <h2 className="baner-greet">Welcome to GadgetHub</h2>
              <h3 className="baner-title">{category} - Category</h3>
            </div>
          </div>
          {/* <h2 className="category-title">{category}</h2> */}
          <div className="category-container">
            {filterProduct.map((item) => (
              <div key={item.id}>
                <ProductCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
