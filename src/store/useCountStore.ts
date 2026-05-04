// store/useCountStore.ts
import { create } from "zustand";

interface CountStore {
  count: number;
  setCount: (count: number) => void;
}

export const useCountStore = create<CountStore>((set) => ({
  count: 0,
  setCount: (count: number): void => {
    set(() => ({
      count: count,
    }));
  },
}));