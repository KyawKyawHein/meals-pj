import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import MealCart from './MealCart'

const Meals = (props) => {

  const {meals,filtermeals} = props
  console.log(filtermeals);

  if(filtermeals.length>1){
    return (
      <div className='md:mt-20 p-2 md:flex flex-wrap gap-2 justify-center'>
        {
          filtermeals?.map(meal=>{
            return (
              <MealCart key={meal.idMeal} {...meal} />
            )
          })
        }
      </div>
    )
    
  }else{
    return (
      <div className="h-screen flex justify-center items-center h-[100%]">
        <h1 className='text-4xl text-center text-red-500 font-bold bg-gray-200 w-[100%] p-3'>Not Found</h1>
      </div>
    )
  }

  
}

export default Meals
