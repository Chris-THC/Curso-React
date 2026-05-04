import { useCountStore } from "../store/useCountStore";

export const ResetComponent = () => {
  const reset = useCountStore((state) => state.reset);

  return (
    <button
      onClick={reset}
      style={{
        padding: "10px 15px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#2196F3",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Resetear
    </button>
  );
};
