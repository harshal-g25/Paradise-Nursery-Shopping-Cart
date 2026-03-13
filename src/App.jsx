import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {

  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  if (showProducts) {
    return <ProductList />;
  }

  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful plants.</p>

      <button onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
}

export default App;
