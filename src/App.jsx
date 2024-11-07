import { useEffect, useState } from 'react'
import './App.css'
import React from 'react'
import { Row,Col } from 'react-bootstrap';
import axios from 'axios';
function App() {
  const  [product,setproducts]=useState([])
  const [product2,setproducts2]=useState([]);
  useEffect(()=>{
 fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(products=>setproducts(products));
  })
 useEffect(()=>{
  axios.get("https://fakestoreapi.com/products").then(res=>setproducts2(res.data))
 })
 console.log(product2);
 
return(
  <div style={{display:"flex",flexWrap:"wrap"}}>
    {
      product.map((prod,index)=>{
        return(
          <div key={index} style={{height:"500px", width:"200px",margin:"30px"}}>
            <img src={prod.image} height="400px" width="200px"/>
          <h5>{prod.title}</h5>
          </div>
        )
      })
    }
  </div>
)}
export default App
