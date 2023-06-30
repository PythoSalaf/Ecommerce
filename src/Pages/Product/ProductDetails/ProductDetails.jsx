import React from "react";
import { useSelector, useDispatch } from "react-redux";
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

  const dispatch = useDispatch()
  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-avatar">
          <img src={avatar} alt={`avatar-${name}`} className="detail-avatar" />
        </div>
        <div className="product-detail-content">
          <h2 className="detail-name">{name}</h2>
          <h3 className="detail-price">#{price.toLocaleString()}</h3>
          <div className="detail-review">
            <Star size={20} /> <span>({review})</span>{" "}
          </div>
          <p className="detail-describe">{discribe}</p>
          <div className="detail-contents">
            <h4 className="detail-brand">Brand: {brand} </h4>
            <h4 className="detail-display">Display: {display} </h4>
            <h4 className="detail-battery">Battery: {battery} </h4>
            <h4 className="detail-camera">Camera: {camera} </h4>
            <h4 className="detail-storage">Storage: {storage} </h4>
            <h4 className="detail-delivery">Delivery: {Delivery} </h4>
          </div>
          <div className="detail-btns">
            <button className="cart-btn" 
            onClick={() => dispatch(addToCart({
              id: id,
              name: name,
              price: price,
              amount: 1,
              avatar: avatar,
              totalPrice: price,
            }))
            }
            >Add to cart</button>
            <button className="now-btn">Buy it now</button>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="discription">
          <h2>Description</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium illo cupiditate exercitationem earum facilis laborum.{" "}
            <br /> Praesentium ut saepe voluptates fugiat.
          </p>
        </div>
        <div className="features">
          <h2>Key Features</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              dolores asperiores quidem.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              commodi.
            </li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>
        <div className="reviews">
          <h2>customer reviews</h2>
          <p>
            Easy to navigate, simple ordering process, and fast delivery.
            <br /> Would recommend."
          </p>
          <p>
            Excellent customer service, quick shipping, and high-quality
            product.
          </p>
          <p>
            Quick response from customer support and prompt issue resolution.
            Satisfied overall.
          </p>
          <p>
            Good product, but shipping and tracking processes could be improved.
          </p>
          <p>Competitive prices and high-quality products.<br/> Recommended.</p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
