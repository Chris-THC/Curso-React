import { useCountStore } from "../store/useCountStore";

export const DecrementComponent = () => {
  const decrement = useCountStore((state) => state.decrement);
  const count = useCountStore((state) => state.count);

  return (
    <button
      onClick={() => decrement(count - 1)}
      style={{
        padding: "10px 15px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#f44336",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "bold",
        marginRight: "10px",
      }}
    >
      Decrementar
    </button>
  );
};
