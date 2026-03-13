import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const increaseQty = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decreaseQty = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const removeFromCart = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="100" />

      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>

      <div>
        <button onClick={decreaseQty}>-</button>
        <span>{item.quantity}</span>
        <button onClick={increaseQty}>+</button>
      </div>

      <button onClick={removeFromCart}>Remove</button>
    </div>
  );
}

export default CartItem;
