import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
  try {
    const cart = localStorage.getItem('nepalmart_cart');
    return cart ? JSON.parse(cart) : { items: [], total: 0 };
  } catch {
    return { items: [], total: 0 };
  }
};

const saveCartToStorage = (cart) => {
  localStorage.setItem('nepalmart_cart', JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromStorage(),
  reducers: {
    addToCart: (state, action) => {
      const { product, size, color, quantity = 1 } = action.payload;
      const existingItem = state.items.find(item =>
        item.product._id === product._id && item.size === size && item.color === color
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ product, size, color, quantity, price: product.price });
      }

      state.total = state.items.reduce((total, item) => total + (item.price.npr * item.quantity), 0);
      saveCartToStorage(state);
    },
    removeFromCart: (state, action) => {
      const { productId, size, color } = action.payload;
      state.items = state.items.filter(item =>
        !(item.product._id === productId && item.size === size && item.color === color)
      );
      state.total = state.items.reduce((total, item) => total + (item.price.npr * item.quantity), 0);
      saveCartToStorage(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      localStorage.removeItem('nepalmart_cart');
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
