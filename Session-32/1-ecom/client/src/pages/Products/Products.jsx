import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import axios from "../../utils/axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getProductsData = async () => {
      try {
        const { data } = await axios.get("/product/all", {
          headers: {
            Authorization: token,
          },
        });
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getProductsData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </div>
  );
};

export default Products;
