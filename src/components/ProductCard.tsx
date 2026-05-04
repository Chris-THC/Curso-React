import type { Product } from "../data/Products";
import "./ProductCard.css";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={product.image} alt={product.title} className="image" />
      </div>
      <h3 className="title">{product.title}</h3>
      <div className="priceContainer">
        <div>
          <h2 className="price">${product.price}</h2>
        </div>
        <button className="button">+</button>
      </div>
    </div>
  );
};
