import React from "react";
import { Options } from "./Options";

interface PropsDetails {
 productName: string;
 price: number;
}

export const ProductDetails: React.FC<PropsDetails> = ({ productName, price }) => {
  return (
    <div className="product-details">
      <span className="category">Electrónica / Audio</span>
      <h1>{productName}</h1>
      <div className="price">${price} MXN</div>

      <p className="description">
        Experimenta una calidad de sonido superior con cancelación de ruido
        activa y hasta 40 horas de batería. Diseñados para la comodidad extrema.
      </p>

      <Options />

      <button className="btn-add">Añadir al Carrito</button>
    </div>
  );
};
