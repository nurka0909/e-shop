import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface WishlistStore {
  wishlist: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: string) => boolean;
}

export const useWishlist = create<WishlistStore>()(
  persist(
    (set, get) => ({
      wishlist: [],
      
      toggleWishlist: (item) => {
        const currentWishlist = get().wishlist;
        const isExisting = currentWishlist.find((i) => i.id === item.id);

        if (isExisting) {
          // Хэрэв байгаа бол устгах
          set({ wishlist: currentWishlist.filter((i) => i.id !== item.id) });
        } else {
          // Байхгүй бол нэмэх
          set({ wishlist: [...currentWishlist, item] });
        }
      },

      isInWishlist: (id) => {
        return get().wishlist.some((item) => item.id === id);
      },
    }),
    { name: 'goyol-wishlist-storage' }
  )
);