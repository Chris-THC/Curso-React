import React from "react";
import "./Card.css";

interface CardProps {
  image: string;
  title: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ image, title, price }) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={image} alt={title} className="image" />
      </div>
      <h3 className="title">{title}</h3>
      <div className="priceContainer">
        <div>
          <h2 className="price">${price}</h2>
        </div>
        <button className="button">+</button>
      </div>
    </div>
  );
};

export default Card;
