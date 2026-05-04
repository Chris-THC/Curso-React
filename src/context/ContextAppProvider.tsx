// ContextAppProvider.tsx
import { useState } from "react";
import { CreateAppContext } from "./CreateAppContext";

export const ContextAppProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <CreateAppContext.Provider value={{ count, setCount }}>
      {children}
    </CreateAppContext.Provider>
  );
};
