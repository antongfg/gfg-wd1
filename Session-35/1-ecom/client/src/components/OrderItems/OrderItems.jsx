import React from "react";

const OrderItems = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <img src={product?.images[0]} width={100} height={100} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OrderItems;
