import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Chefs = () => {
    const [disable, setDisable]= useState(false) 
    const [disable2, setDisable2]= useState(false) 
    const [disable3, setDisable3]= useState(false) 
    const data = useLoaderData();
    const newData= data[0]
    console.log(newData)
    const {id,Chef_Name, Chef_Picture, Years_of_experience,Numbers_of_recipes, Likes, bio, recipes_name1,ingredients1,cooking_method, rating, recipes_name2, recipes_name3,  ingredients2, cooking_method2, rating2} = newData;
 
  const addtofavorite =()=>{
    toast('Item Favourite list added')
    setDisable(true)
  }
  const addtofavorite2 =()=>{
    toast('Item Favourite list added')
    setDisable2(true)
  }
  const addtofavorite3 =()=>{
    toast('Item Favourite list added')
    setDisable3(true)
  }
    return (
        <div>
            <h2 className='text-center mt-3 mb-2'>Chef info and special Recipes</h2>
        {/* *chef details banner page* */}
          <div className='d-flex justify-content- container mt-5 mb-5'>
            <div className='me-5'>
                   <img src={Chef_Picture} alt="" />
            </div>
            <div className='mt-5'> 
                 <h3>This is {Chef_Name}</h3>
                 <p>{bio}</p>
                 <div className='d-flex justify-content-around text-success'>
       <p>Experience: {Years_of_experience} years</p>
       <p>Likes: {Likes}</p>
       <p>Number of Recipes: {Numbers_of_recipes}</p>
       </div>
            </div>
          </div>
            {/* recipis list */}
                <div className='container mb-4'>
                <div className="card-group">
  <div className="card">
    {/* <img src="..." className="card-img-top" alt="..."/> */}
    <div className="card-body">
      <h5 className="card-title">Recipe Name: {recipes_name1}</h5>
       <div>

        <h4>ingredients:</h4>
       <ul>
  <li >{ingredients1.one}</li>
  <li >{ingredients1.two}</li>
  <li >{ingredients1.three}</li>
  <li >{ingredients1.four}</li>
  <li >{ingredients1.five}</li>
  
  
</ul>
       </div>
      <p className="card-text"> <span className='text-success'>Cooking method: </span> {cooking_method}</p>
      <p>rating: {rating}</p>
      <button disabled={disable} onClick={ addtofavorite} >Favourite</button>
      <ToastContainer></ToastContainer>
    </div>
  </div>
  <div className="card">
    {/* <img src="..." className="card-img-top" alt="..."/> */}
    <div className="card-body">
      <h5 className="card-title">Recipe Name: {recipes_name2}</h5>
       <div>

        <h4>ingredients:</h4>
       <ul>
  <li >{ingredients1.one}</li>
  <li >{ingredients1.two}</li>
  <li >{ingredients1.three}</li>
  <li >{ingredients1.four}</li>
  <li >{ingredients1.five}</li>
  
  
</ul>
       </div>
      <p className="card-text"> <span className='text-success'>Cooking method: </span> {cooking_method}</p>
      <p>rating: {rating}</p>
      <button disabled={disable2} onClick={ addtofavorite2} >Favourite</button>
      <ToastContainer></ToastContainer>
    </div>
  </div>
  
  <div className="card">
    {/* <img src="..." className="card-img-top" alt="..."/> */}
    <div className="card-body">
      <h5 className="card-title">Recipe Name: {recipes_name3}</h5>
       <div>

        <h4>ingredients:</h4>
       <ul>
  <li >{ingredients1.one}</li>
  <li >{ingredients1.two}</li>
  <li >{ingredients1.three}</li>
  <li >{ingredients1.four}</li>
  <li >{ingredients1.five}</li>
  
  
</ul>
       </div>
      <p className="card-text"> <span className='text-success'>Cooking method: </span> {cooking_method}</p>
      <p>rating: {rating}</p>
      <button disabled={disable3} onClick={ addtofavorite3} >Favourite</button>
      <ToastContainer></ToastContainer>
    </div>
  </div>
  
</div>
                </div>
             
        </div>
    );
};

export default Chefs;