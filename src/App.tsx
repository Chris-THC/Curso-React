import React from "react";
import "./App.css";
import { ProductGallery } from "./components/ProductGallery";
import { ProductDetails } from "./components/ProductDetails";
import imagen from "./assets/audifonos.jpg"

const App: React.FC = () => {
  return (
    <div className="product-container">
      {/* <!-- Parte Izquierda: Imagen --> */}
      <ProductGallery srcPath={imagen} />

      {/* <!-- Parte Derecha: Detalles --> */}
      <ProductDetails productName="AirPods 4" price={3000.01} />
    </div>
  );
};

export default App;
