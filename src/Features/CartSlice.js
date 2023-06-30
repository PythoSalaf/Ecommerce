import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
}



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, { payload }) => {
            const productId = payload
            try {
                const exist = state.cart.find((product) => product.id === productId)
                if(exist) {
                    exist.amount++
                    exist.totalPrice++
                    exist.totalAmount++
                    // state.totalAmount++
                    state.totalPrice += productId.price
                }else {
                    state.cart.push({
                        id: productId.id,
                        price: productId.price,
                        name: productId.name,
                        amount: 1,
                        totalPrice: productId.price,
                        avatar: productId.avatar,
                    });
                    state.totalAmount++
                    state.totalPrice += productId.price

                }
            } catch (error) {
                return error
            }
        },

        removeFromCart: (state, { payload }) => {
            const productId = payload
            try {
                const exist = state.cart.find(
                    (product) => 
                    product.id === productId.id 
                )

                if (exist.amount === 1) {
                    state.cart = state.cart.filter(
                        (product) => 
                        product.id !== productId.id
                    );
                    state.totalAmount--
                    state.totalPrice -= productId.price
                } else {
                    exist.amount--
                    exist.totalPrice -= productId.price
                    state.totalAmount--
                    state.totalPrice -= productId.price
                }
                
            } catch (err) {
                return err
            }
        }
    }
}) 



export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer