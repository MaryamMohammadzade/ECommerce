import { create } from "zustand";

const useStore = create((set, get) => ({
  // Tokens
  access_token: null,
  refresh_token: null,

  setState: (data) =>
    set({
      access_token: data?.access_token,
      refresh_token: data?.refresh_token,
    }),

  removeState: () =>
    set({ access_token: null, refresh_token: null }),

  // Cart
  cart: [],

  addToCart: (product) => {
    const cart = get().cart;
    const existing = cart.find((p) => p.id === product.id);

    if (existing) {
      existing.quantity += 1;
      set({ cart: [...cart] });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },

  decreaseFromCart: (productId) => {
    const cart = get().cart.map((p) => {
      if (p.id === productId && p.quantity > 0) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    }).filter(p => p.quantity > 0); 
    set({ cart });
  },

  clearCart: () => set({ cart: [] }),

  getTotal: () => get().cart.reduce((sum, p) => sum + p.price * p.quantity, 0),
}));

export default useStore;
