import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Features/ProductSlice";
import CartReducer from "./Features/CartSlice";
export const store = configureStore({
    reducer: {
        products: ProductReducer,
        cart: CartReducer
    }
})