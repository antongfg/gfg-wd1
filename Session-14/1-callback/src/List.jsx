import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(100));
  }, [getItems]);

  return (
    <div>
      {items.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default List;
