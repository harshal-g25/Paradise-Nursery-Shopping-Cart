import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem({ item }) {

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const remove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">

      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <p>Total: ${item.price * item.quantity}</p>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={remove}>Remove</button>

    </div>
  );
}

export default CartItem;

