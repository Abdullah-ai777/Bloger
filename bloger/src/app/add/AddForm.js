"use client"; // Client directive is mandatory for hooks like useRouter
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Use correct import
import "./add.css";
import Header from "../Header";
export default function AddForm() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const router = useRouter(); // useRouter is valid here because it's a client component

  async function add(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/add", { name, text });
      setName("");
      setText("");
      router.push("/"); // Navigate to home
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (<>
  <Header/>
    <div className="add-form">
      <h2>Add Blog</h2>
      <form onSubmit={add}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Text:</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
    </>
  );
}
