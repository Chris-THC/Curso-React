import React from "react";
import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";

const App: React.FC = () => {
  return (
    <div>
      <h2>Count by Zustand</h2>
      <ComponentA />
      <ComponentB />
    </div>
  );
};

export default App;
