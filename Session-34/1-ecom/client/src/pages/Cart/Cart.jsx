import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartInfo.cart);

  const totalPrice = cartItems.reduce(
    (prev, item) => prev + item.price * (item.noOfItems ? item.noOfItems : 1),
    0
  );

  return (
    <div>
      <h1>Cart</h1>
      <p>
        Total price: <strong>{totalPrice}</strong>
      </p>
      {cartItems.map((item) => {
        return <CartItem key={item._id} product={item} />;
      })}
    </div>
  );
};

export default Cart;
