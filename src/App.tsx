import React from "react";
import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import { DecrementComponent } from "./context/DecrementComponent";
import { ResetComponent } from "./Reset/ResetComponent";

const App: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Count by Zustand</h2>

      <ComponentA />
      <ComponentB />

      <div style={{ marginTop: "15px" }}>
        <DecrementComponent />
        <ResetComponent />
      </div>
    </div>
  );
};

export default App;
