import React from 'react'
import Card from "./Card"
import {Link} from "react-router-dom"
import { useState,useEffect } from 'react';
import axios from 'axios'
function Course() {
  const[book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
       const res=await axios.get('http://localhost:4000/book');
       console.log(res.data);
       setBook(res.data);
      }
      catch(error){
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 border-t-4 ">

      <div className="mt-28 items-center justify-center text-center ">
        <h1 className="text-2xl  md:text-4xl">We are delighted to have you  
          <span className="text-pink-500"> Here!</span> 
        </h1>
        <p className="mt-12">
        Lorem ipsum dolor sit amet. Est quia sequi qui dolorem doloremque ex laudantium excepturi. Et laboriosam aliquid ex reiciendis ipsum vel possimus velit quo Quis corporis. Est assumenda iste aut consectetur Quis et autem repellat qui dolorum dolorem et natus omnis eos architecto quis aut eligendi sequi.Lorem ipsum dolor sit amet. Est quia sequi qui dolorem doloremque ex laudantium excepturi. Et laboriosam aliquid ex reiciendis ipsum vel possimus velit quo Quis corporis. Est assumenda iste aut consectetur Quis et .
        </p>
        <Link to="/">
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
        </Link>  
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          book.map((item)=>(
            <Card key={item.id} item={item}/>
          ))
        }
      </div>
      </div>
    </>
   
  )
}

export default Course
