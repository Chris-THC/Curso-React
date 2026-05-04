// ComponentA.tsx

import { useCountStore } from "../store/useCountStore";

export const ComponentA = () => {
  const count = useCountStore((state) => state.count);
  const setCount = useCountStore((state) => state.setCount);

  return (
    <div>
      <h2>Component A: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
