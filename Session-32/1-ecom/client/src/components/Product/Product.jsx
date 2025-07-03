import React, { useState } from "react";
import "./Product.css";

const Product = ({ product }) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="product-card">
      <div className="product-title">{product.title}</div>

      <div className="product-images">
        <img src={product.images[currentImg]} alt="" />
        <div className="thumbnail-row">
          {product.images.map((img, index) => {
            return (
              <img
                key={index}
                src={img}
                alt="Thumbnail"
                className={index === currentImg ? "active-thumb" : ""}
                onClick={() => setCurrentImg(index)}
              />
            );
          })}
        </div>
      </div>

      <p className="product-description">{product.description}</p>

      <div className="product-info">
        <p>
          <strong>Price:</strong>₹{product.price}
        </p>
        <p>
          <strong>Rating:</strong>⭐ {product.rating}
        </p>
        <p>
          <strong>Available Quantity</strong> {product.quantity}
        </p>
      </div>

      <div className="product-reviews">
        <h3>Reviews:</h3>
        {product.reviews.map((review) => {
          return (
            <div key={review._id} className="review">
              <strong>{review.name}: </strong> {review.comment}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
