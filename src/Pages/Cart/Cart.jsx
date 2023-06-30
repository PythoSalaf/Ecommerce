import React from "react";
import { useSelector } from "react-redux";
import { EmptyCart, ProductCard, FullCart } from "../../Components";
import "./Cart.css";

const Cart = () => {
  const product = useSelector((state) => state.products.displayedProduct);
  const cart = useSelector((state) => state.cart.cart);
  console.log("cart-cart", cart);
  return (
    <div className="cart-page">
      {cart.length > 0 ? (
        <>
        <FullCart />
          <div className="other-product">
            <h3 className="other-product-title">You may also like </h3>
            <div className="other-product-container">
              {product.map((data) => (
                <div key={data.id}>
                  <ProductCard {...data} />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
