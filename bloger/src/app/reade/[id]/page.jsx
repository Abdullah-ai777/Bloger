"use client";
import axios from "axios";
import { useEffect,use, useState } from "react";
import Header from '../../Header';
import"./index.css";
import Link from "next/link";
export default  function page(context)
{
    let id1= use(context.params);

useEffect(()=>{
    axios.get(`http://localhost:3002/reade/${id1.id}`).then(response=>{
        setName(response.data.name);
        settext(response.data.text)
    })
})

let [name,setName]=useState("");
let [text,settext]=useState("");





    return(<>
    <Header/>
    <div className="container">
   <h1 className="h1">{name}</h1>
    <p className="p">{text}</p>
    <Link href={"/"}>
    <button className="button">Back</button>
    </Link>
    </div>
    </>)
}