import React from "react";
import { Card } from "./components/Card/Card";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <h2>Welcome to the Card App</h2>
      <Card title="Card Title" description="This is a description of the card." />
      <Card title="Another Card" description="This is another card with a different description." />
      <Card title="Third Card" description="This is the third card with yet another description." />
    </div>
  );
};

export default App;
