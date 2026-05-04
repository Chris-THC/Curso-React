// ComponentB.tsx
import { useContext } from "react";
import { CreateAppContext } from "../context/CreateAppContext";


export const ComponentB = () => {
  const { count } = useContext(CreateAppContext);

  return <h2>Component B: {count}</h2>;
};
