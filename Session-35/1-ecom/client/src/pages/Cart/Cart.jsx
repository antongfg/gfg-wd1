import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import axios from "../../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import { clearCart } from "../../slices/cart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartInfo.cart);

  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (prev, item) => prev + item.price * (item.noOfItems ? item.noOfItems : 1),
    0
  );

  const handleOrder = async () => {
    const token = localStorage.getItem("token");
    const { data } = await axios.post(
      "/order",
      {
        products: cartItems,
        total: totalPrice,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    toast.success(data.msg);
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Cart</h1>
      <ToastContainer />
      <p>
        Total price: <strong>{totalPrice}</strong>
      </p>
      <button onClick={handleOrder}>Place Order</button>
      {cartItems.map((item) => {
        return <CartItem key={item._id} product={item} />;
      })}
    </div>
  );
};

export default Cart;
