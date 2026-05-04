import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default Counter;