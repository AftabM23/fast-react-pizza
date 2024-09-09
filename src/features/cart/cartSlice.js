import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.cart.find(
        (item) => item.pizzaId === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
          pizzaId: action.payload.id,
        };

        state.cart.push(newItem);
      }
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity--;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const totalPrice = (state) =>
  state.cart.cart.reduce(
    (total, item) => total + item.quantity * item.unitPrice,
    0,
  );
export const totalPizzas = (state) =>
  state.cart.cart.reduce((totalPizzas, item) => totalPizzas + item.quantity, 0);
export const cart = (state) => state.cart.cart;

export const pizzaQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id);

export const pizzaCart = (state) => state.cart.cart;
