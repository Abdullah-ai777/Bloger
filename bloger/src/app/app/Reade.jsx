"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Header from "../Header";
import { useRouter } from "next/navigation"; // Use correct import


export default function Reade() {
  const [data, setData] = useState([]);
  const router = useRouter(); 

  function hello(){
router.push("/add")
  }
  // Data fetch karna on page load
  useEffect(() => {
    axios
      .get("http://localhost:3002/data")
      .then((response) => {
        setData(response.data);  // Set data to the state
      })
      .catch((e) => {
        console.log(e);
      });
  }, []); // Empty dependency array ensures that it fetches data only once when the page loads.

  return (
  <>
   
      <Header />
      
            <div className="home_div">
              {data &&
                data.map((e, k) => (
                  <Card
                    idnum={e.id}
                    name={e.name}
                    text={e.text}
                    key={k}
                  />
                ))}
              
                <button className="Add_post" onClick={hello}>Add Post</button>
              
            </div>
          
        </>

      
  );
}
