import React from 'react'
import { Link } from 'react-router-dom'

const MealCart = ({idMeal,strMealThumb,strMeal}) => {
  return (
    <>
        <Link to={`/detail/${idMeal}`}>
            <div className='mb-5 md:mb-2 border md:w-[350px] hover:border-dashed rounded hover:border-red-400 overflow-hidden'>
                <img src={strMealThumb} className='w-[100%] md:h-[330px] transition-all duration-500 object-cover cursor-pointer hover:scale-x-[110%]'  alt="" />
                <h1 className='text-2xl text-center p-2 font-semibold'>{strMeal}</h1>
            </div>
            <div className='md:hidden bg-gray-300 w-100 p-[2px] rounded my-2'></div>              
        </Link>
    </>
  )
}

export default MealCart
