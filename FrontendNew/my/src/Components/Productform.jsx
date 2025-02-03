import axios from "axios";
import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [tag, setTag] = useState("");
  const [email, setEmail] = useState("");

  const [preview, setPreview] = useState([]);
  const [image, setImage] = useState([]);

  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    setImage((prev) => [...prev, ...files]);

    const imgPreviews = files.map((file) => URL.createObjectURL(file));
    setPreview((prev) => [...prev, ...imgPreviews]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("stock", stock);
    formData.append("tag", tag);

    image.forEach((img) => formData.append("image", img, img.name));

    try {
      const res = await axios.post("http://localhost:5000/create-product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        alert("Product Added Successfully");

        setEmail("");
        setName("");
        setPrice("");
        setDescription("");
        setCategory("");
        setStock("");
        setTag("");
        setImage([]);
        setPreview([]);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" required onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Your Email" />
        </div>
        <div>
          <label>Product Name</label>
          <input type="text" required onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Product Name" />
        </div>
        <div>
          <label>Product Price</label>
          <input type="number" required onChange={(e) => setPrice(e.target.value)} value={price} placeholder="Enter Product Price" />
        </div>
        <div>
          <label>Product Description</label>
          <input type="text" required onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Enter Description" />
        </div>
        <div>
          <label>Product Category</label>
          <input type="text" required onChange={(e) => setCategory(e.target.value)} value={category} placeholder="Enter Category" />
        </div>
        <div>
          <label>Product Stock</label>
          <input type="number" required onChange={(e) => setStock(e.target.value)} value={stock} placeholder="Enter Stock" />
        </div>
        <div>
          <label>Product Tag</label>
          <input type="text" required onChange={(e) => setTag(e.target.value)} value={tag} placeholder="Enter Tag" />
        </div>

        <div>
          <label>Product Image</label>
          <input type="file" multiple required onChange={handleImage} id="upload" />
        </div>
        <div>
          <AiOutlinePlusCircle htmlFor="upload" />
        </div>
        <div>
          {preview.map((img, index) => (
            <img src={img} key={index} alt="preview" style={{ height: "100px" }} />
          ))}
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Submit</button>
      </form>
    </div>
  );
};
