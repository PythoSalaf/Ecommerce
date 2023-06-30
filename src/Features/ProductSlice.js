import { createSlice } from "@reduxjs/toolkit";
import { productItems } from "../Pages/Product/ProductData";

const initialState = {
  products: productItems,
  filterProducts:
    JSON.parse(sessionStorage.getItem("filteredData")) || productItems,
  randomProducts: [],
  displayedProduct: productItems.slice(0, 8),
  numberToAdd: 4,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      try {
        const filter = state.products.filter(
          (product) => product.category === action.payload
        );
        state.filterProducts = filter;
        console.log("payload", action.payload);
        console.log("filteredData", filter);
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (error) {
        return error;
      }
    },

    showMoreProducts: (state, action) => {
      const currentProductCount = state.displayedProduct.length;
      const newProductCount = currentProductCount + state.numberToAdd;
      state.displayedProduct = state.products.slice(0, newProductCount);
    },

    setRandomProducts: (state) => {
      const shuffledProducts = state.products.sort(() => 0.5 - Math.random());
      const selectedProducts = shuffledProducts.slice(0, 3);
      state.randomProducts = selectedProducts;
    },
  },
});

export const { setRandomProducts, filterProducts, showMoreProducts } =
  productSlice.actions;

export default productSlice.reducer;
