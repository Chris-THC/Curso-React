import { useCountStore } from "../store/useCountStore";

export const ComponentB = () => {
  const count = useCountStore((state) => state.count);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        marginBottom: "15px",
        color: "#333",
        border: "1px solid #e5e7eb",
      }}
    >
      <h2>Component B: {count}</h2>
    </div>
  );
};
