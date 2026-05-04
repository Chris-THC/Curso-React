// CreateAppContext.tsx
import { createContext } from "react";

interface ContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CreateAppContext = createContext<ContextType>({} as ContextType);