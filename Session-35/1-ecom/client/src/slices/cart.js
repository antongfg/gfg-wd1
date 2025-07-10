import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isPresent = state.cart.find(
        (item) => String(item._id) === String(action.payload._id)
      );
      if (!isPresent) {
        state.cart = [...state.cart, action.payload];
      } else {
        state.cart = state.cart.map((item) => {
          if (String(item._id) === String(action.payload._id)) {
            return {
              ...item,
              noOfItems: item?.noOfItems ? item?.noOfItems + 1 : 2,
            };
          } else {
            return item;
          }
        });
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
    removeFromCart: (state, action) => {
      console.log(state.cart, action);

      const itemData = state.cart.find(
        (item) => String(item._id) === String(action.payload)
      );
      if (itemData?.noOfItems > 1) {
        state.cart = state.cart.map((item) => {
          if (String(item._id) === String(action.payload)) {
            return {
              ...item,
              noOfItems: item.noOfItems - 1,
            };
          }
          return item;
        });
      } else {
        state.cart = state.cart.filter(
          (product) => String(product._id) !== String(action.payload)
        );
      }
    },
  },
});

export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
