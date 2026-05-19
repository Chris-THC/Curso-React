import React from "react";

export const Options: React.FC = () => {
  return (
    <div className="options">
      <label htmlFor="color">Color</label>
      <select id="color">
        <option>Negro Mate</option>
        <option>Blanco Polar</option>
        <option>Azul Medianoche</option>
      </select>
    </div>
  );
};
