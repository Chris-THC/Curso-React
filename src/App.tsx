import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const Apps: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError("Error al cargar los productos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h2>Cargando productos...</h2>;
  if (error || products.length === 0) return <h1>Error no hay productos</h1>;

  return (
    <div className="container">
      <h2 className="title-text">Products List</h2>

      {products.map((product) => (
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
      ))}
    </div>
  );
};

export default Apps;
