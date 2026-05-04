import { useCountStore } from "../store/useCountStore";


export const ResetComponent = () => {
  const reset = useCountStore((state) => state.reset);

  return (
    <button onClick={reset}>
      Resetear
    </button>
  );
};