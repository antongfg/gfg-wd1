import React, { useState } from "react";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../slices/cart";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <div className="product-title">{product.title}</div>

      <div className="product-images">
        <img src={product.images[0]} alt="" />
      </div>

      <div className="product-info">
        <p>
          <strong>Price:</strong>₹{product.price}
        </p>
        <p>
          <strong>Rating:</strong>⭐ {product.rating}
        </p>
      </div>

      {product?.noOfItems && <div>Quantity: {product.noOfItems}</div>}

      <button onClick={() => dispatch(removeFromCart(product._id))}>
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;
