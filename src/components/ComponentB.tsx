// ComponentB.tsx

import { useCountStore } from "../store/useCountStore";

export const ComponentB = () => {
  const count = useCountStore((state) => state.count);

  return <h2>Component B: {count}</h2>;
};
