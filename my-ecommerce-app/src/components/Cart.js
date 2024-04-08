import React from 'react';
import CartItem from './CartItem';
import './product.css';

const calculateTotal = (cart) => {
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
  });
  return total;
};

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} removeFromCart={removeFromCart} />
      ))}
      <p>Total (in cart): ${calculateTotal(cart)}</p>
    </div>
  );
};



export default Cart;
