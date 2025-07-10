import React, { useState, useEffect } from "react";
import OrderItems from "../../components/OrderItems/OrderItems";
import axios from "../../utils/axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get("/order/all", {
          headers: {
            Authorization: token,
          },
        });
        setOrders(data.orders);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  console.log(orders);

  return (
    <div>
      <h1>Orders</h1>
      {orders?.map((order, index) => {
        return (
          <div key={order._id}>
            <h1>Order: #{index + 1}</h1>
            <OrderItems products={order.products} />
            <h5>Total price: {order.total}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
