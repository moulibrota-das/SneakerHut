import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProducts: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProducts: (state, action) => {
      state.quantity -= 1;
      let reduceTotal =
        state.products[action.payload.productIdx].price *
        state.products[action.payload.productIdx].quantity;

      const newProducts = state.products;
      newProducts.splice(action.payload.productIdx, 1);
      state.products = newProducts;
      state.total -= reduceTotal;
    },
  },
});

export const { addProducts } = cartSlice.actions;
export const { removeProducts } = cartSlice.actions;
export default cartSlice.reducer;
