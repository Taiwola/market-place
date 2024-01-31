import { Products } from "@/collections/products/Products";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartItem = {
  product: Products;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Products) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => ({
          items: [...state.items, { product }],
        })),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.product[0].id !== id),
        })),
      clearCart: () =>
        set((state) => ({
          items: [],
        })),
    }),
    {
      name: "cart-storage",
      // Storage setup (you may adjust as needed)
      storage: createJSONStorage(() => localStorage)
    }
  )
);
