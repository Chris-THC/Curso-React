import { ProductCard } from "./components/ProductCard";
import { products } from "./data/Products";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h2 className="title-text">Products List</h2>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
  );
};

export default App;
