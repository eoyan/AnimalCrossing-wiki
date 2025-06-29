import { create } from 'zustand';

export const useVillagerStore = create((set) => ({
  favorites: [],
  addFavorite: (villager) =>
    set((state) => ({
      favorites: [...state.favorites, villager],
    })),
}));