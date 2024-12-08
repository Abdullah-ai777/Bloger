import React from 'react';
import './index.css';
import axios from 'axios';
import Link from 'next/link';


function Card(props) {

  let id1 = props.idnum;
  function hello() {
    
  
    const deleteItem = async () => {
      try {
        // Axios DELETE request
        const response = await axios.delete(`http://localhost:3002/delete/${id1}`);
        
        // If delete is successful, log the response or handle further actions
        console.log("Item deleted:", response.data);
window.location.reload();
      } catch (error) {
        // Error handling
        console.log("Error while deleting item:", error);
      }
    };
  
    deleteItem();
  }
 
  
  return (
    <div className="card">
      
      <h3> {props.name}</h3>
      <p className="blog">{props.text}</p>
      <Link href={`/reade/${id1}`}>
      <button className="read-more">Read More</button>
      </Link>
      <button className="Delete" onClick={hello} >Delete</button>
      <Link href={`/update/${id1}`}>
        <button   className='button-up'>Update</button>
      </Link>
      
    </div>
  );
}

export default Card; 