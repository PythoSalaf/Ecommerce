import { Route } from "./Config";
import { useSelector } from "react-redux";

function App() {
  const cart =  useSelector(state =>  state.cart.cart)
  const totalPrice =  useSelector(state =>  state.cart.totalPrice)
  const totalAmount =  useSelector(state =>  state.cart.totalAmount)
  console.log("cart", cart);
  console.log("totalprice", totalPrice);
  console.log("totalAmount", totalAmount);
  return (
    <>
      <Route />
    </>
  );
}

export default App;
