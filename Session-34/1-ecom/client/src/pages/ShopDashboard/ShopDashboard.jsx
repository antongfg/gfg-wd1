import React from "react";
import { useState } from "react";
import axios from "../../utils/axios";

const ShopDashboard = () => {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const addToSetImages = () => {
    if (image === "") {
      alert("Please enter a image url");
      return;
    }
    setImages((curr) => [...curr, image]);
    setImage("");
  };

  const createProduct = async () => {
    console.log(title, images, rating, price, quantity, category);
    let token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        "/product/create",
        {
          title,
          images,
          rating,
          price,
          quantity,
          category,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <div>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={addToSetImages}>Add</button>
      </div>
      <div>
        {images.map((url, index) => {
          return <img key={index} src={url} alt="" width={100} height={100} />;
        })}
      </div>
      <div>
        <label>Rating</label>
        <br />
        <input
          type="range"
          min={0}
          max={5}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <br />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={1}>Electronics</option>
        <option value={2}>Furniture</option>
        <option value={3}>Lighting</option>
      </select>
      <br />
      <button onClick={createProduct}>Add Product</button>
    </div>
  );
};

export default ShopDashboard;
