import React from "react";
import { today } from "../../Assets";
import { Information, ProductCard, ShopCategory } from "../../Components";
import { useSelector } from "react-redux";
import "./Todaydeal.css";

const TodayDeal = () => {
  const { displayedProduct } = useSelector((state) => state.products);
  return (
    <div className="today-container">
      <div className="today-deal">
        <img src={today} alt="today-hero" />
        <div className="today-content">
          <h2 className="content-title">today's deals</h2>
          <p className="content-text">
            Daily Deal Extravaganza: Get Ready for an Unforgettable Shopping
            Spree! <br /> Today's Steals and Deals: Your One-Stop Destination
            for Unbeatable Prices!
          </p>
          <ul className="list-container">
            <li>Deals available for a limited time only!</li>
            <li>Grab them before they're gone!</li>
            <li>Limited stock - Act fast to secure your deal!</li>
          </ul>
        </div>
      </div>

      <div className="deal-container">
        <div className="deal-left">
          <ShopCategory />
          <Information/>
        </div>
        <div className="deal-right">
          <div className="deal-item-container">
            {displayedProduct.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayDeal;
