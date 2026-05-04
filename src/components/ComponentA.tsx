// ComponentA.tsx
import { useContext } from "react";
import { CreateAppContext } from "../context/CreateAppContext";

export const ComponentA = () => {
  const { count, setCount } = useContext(CreateAppContext);

  return (
    <div>
      <h2>Component A: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
