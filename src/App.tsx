import React from "react";
import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import { DecrementComponent } from "./context/DecrementComponent";
import { ResetComponent } from "./Reset/ResetComponent";

const App: React.FC = () => {
  return (
    <div>
      <h2>Count by Zustand</h2>
      <ComponentA />
      <ComponentB />
      <br />
      <DecrementComponent />
      <br />
      <br />
      <br />
      <ResetComponent />
    </div>
  );
};

export default App;
