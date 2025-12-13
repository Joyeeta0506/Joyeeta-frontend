import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Cart is empty</h2>;
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item._id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>

            <div className="qty">
              <button onClick={() => decreaseQty(item._id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item._id)}>+</button>
            </div>

            <button onClick={() => removeFromCart(item._id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}
