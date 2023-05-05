import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Chefs = () => {
    
    const data = useLoaderData();
    const newData= data[0]
    console.log(newData)
    const {id,Chef_Name, Chef_Picture, Years_of_experience,Numbers_of_recipes, Likes, bio, recipes_name1,ingredients1,cooking_method, rating, recipes_name2, ingredients2, cooking_method2, rating2} = newData;
 
  
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
      <button >Favourite</button>
    </div>
  </div>
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
      <button >Favourite</button>
    </div>
  </div>
  
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
      <button >Favourite</button>
    </div>
  </div>
  
</div>
                </div>
             
        </div>
    );
};

export default Chefs;