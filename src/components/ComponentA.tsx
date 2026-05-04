import { useCountStore } from "../store/useCountStore";

export const ComponentA = () => {
  const count = useCountStore((state) => state.count);
  const setCount = useCountStore((state) => state.setCount);

  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        marginBottom: "15px",
        color: "#333",
        border: "1px solid #e5e7eb",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Component A: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 15px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Incrementar
      </button>
    </div>
  );
};