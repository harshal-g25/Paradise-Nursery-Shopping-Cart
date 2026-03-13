import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Aloe Vera",
    price: 12,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    image: "https://via.placeholder.com/150"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Our Plants</h1>

      <div className="plant-list">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>

            <button onClick={() => dispatch(addItem(plant))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
