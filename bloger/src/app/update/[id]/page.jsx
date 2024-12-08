"use client";
import React, { useState } from 'react';
import { use } from 'react';
import "./styles.css"
import axios from 'axios';
import { useRouter } from "next/navigation"; // Use correct import
import Header from '../../Header';  // Going up one level to src/app and then importing Header.jsx

export default function page(context){
    const router = useRouter();
    let {id}=use(context.params);
    
    
    const [name, setName] = useState('');
    const [text, setText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.patch(`http://localhost:3002/update/${id}`,{
        name:name,
        text:text
      })
      router.push("/");
    };
  
    return (<>
    <Header/>
      <form onSubmit={handleSubmit} className="my-form">
        <label className="form-label">
          Enter updated     Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Enter updated Text:
          <textarea value={text} onChange={(e) => setText(e.target.value)} className="form-textarea" />
        </label>
        <br />
        <button type="submit" className="form-button">Submit</button>
      </form></>
    );
}