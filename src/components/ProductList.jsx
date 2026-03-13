import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Peace Lily", price: 18, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Spider Plant", price: 12, image: "https://via.placeholder.com/150" }
  ],

  Succulents: [
    { id: 4, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Jade Plant", price: 14, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Echeveria", price: 16, image: "https://via.placeholder.com/150" }
  ]
};

function ProductList() {

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Our Plants</h1>

      {Object.entries(plants).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {items.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} width="150"/>
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>

              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

export default ProductList;
