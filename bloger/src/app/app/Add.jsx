import React, { useState } from 'react';
import './add.css';
import axios from 'axios';


function Add() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

 async function add(e){
    e.preventDefault();
    try{
    
        await axios.post("http://localhost:3000/add",{
            name:name,
            text:text
        })
     setName("");
     setText("");
    
    }catch (e){
 console.log(e)
    }

  }


  return (
    
    <div className="add-form">
      <h2>Add Form</h2>
      <form >
        <label>Name:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <br />
        <label>Text:</label>
        <textarea value={text} onChange={(event) => setText(event.target.value)} />
        <br />
        
        <button onClick={add} >Add</button>
      </form>
    </div>
  );
}

export default Add;