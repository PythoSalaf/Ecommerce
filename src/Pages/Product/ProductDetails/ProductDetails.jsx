import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineHeart } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../Features/CartSlice";
import { Star } from "../../../Components";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products } = useSelector((state) => state.products);
  const product = products.find((product) => product.id === Number(productId));
  const {
    id,
    avatar,
    name,
    Delivery,
    review,
    price,
    discribe,
    brand,
    specs: { display, camera, battery, storage },
  } = product;

  const dispatch = useDispatch();
  return (
    <div className="product-detail-page">
      <div className="product-details-top">
        <div className="details-top-left">
          <div className="detail-avatar">
            <img src={avatar} alt="big-avatar" />
          </div>
          <div className="sub-details-avatar">
            <div className="subavatar-container">
              <img src={avatar} alt="subavatar-1" />
              <img src={avatar} alt="subavatar-2" />
              <img src={avatar} alt="subavatar-3" />
            </div>
          </div>
        </div>
        <div className="details-top-right">
          <h2 className="details-name">{name}</h2>
          <div className="details-star-container">
            <Star size={20} />
            <p className="details-review">({review})</p>
          </div>
          <h3 className="details-price">#{price.toLocaleString()}</h3>
          <p className="details-describe">{discribe}</p>
          <p className="product-property">Brand: {brand}</p>
          <p className="product-property">Battery: {battery}</p>
          <p className="product-property">Display: {display}</p>
          <p className="product-property">Camera: {camera}</p>
          <p className="product-property">Storage: {storage}</p>
          <div className="details-increament">
            <div className="column">-</div>
            <div className="column">1</div>
            <div className="column">+</div>
          </div>
          <button
            className="add-to-btn"
            onClick={() =>
              dispatch(
                addToCart({
                  id: id,
                  name: name,
                  avatar: avatar,
                  amount: 1,
                  price: price,
                  totalPrice: price,
                })
              )
            }
          >
            add to cart
          </button>
          <div className="add-to-wishlist">
            <HiOutlineHeart size={32} />
            <p>add to wishlist</p>
          </div>
          <p className="product-property">Delivery: {Delivery}</p>
        </div>
      </div>
      <div className="product-details-bottom">
        <div className="details-bottom-container">
          <button>product description</button>
          <button>reviews</button>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi rerum{" "}
          tenetur facilis tempora, <br /> officia assumenda. Omnis dignissimos
          alias nostrum recusandae possimus <br />
          eligendi aliquam minima sed?
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
