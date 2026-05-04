// store/useCountStore.ts
import { create } from "zustand";

interface CountStore {
  count: number;
  setCount: (count: number) => void;
  // Add: decrement and reset functions
  decrement: (count: number) => void;
  reset: () => void;
}

export const useCountStore = create<CountStore>((set) => ({
  count: 0,
  setCount: (count: number): void => {
    set(() => ({
      count: count,
    }));
  },
  decrement: (count: number): void => {
    set(() => ({
      count: count,
    }));
  },
  reset: () => {
    set(() => ({
      count: 0,
    }));
  },
}));
