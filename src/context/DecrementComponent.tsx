import { useCountStore } from "../store/useCountStore";

export const DecrementComponent = () => {
  const decrement = useCountStore((state) => state.decrement);
  const count = useCountStore((state) => state.count);

  return <button onClick={() => decrement(count - 1)}>Decrementar</button>;
};
