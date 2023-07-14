import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Detail = (props) => {
    const [meal,setMeal] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const {meals} = await api.json()
        setMeal(meals[0])
    }

  return (
    <div className='p-3 block lg:flex flex-col justify-center items-center h-screen'>
        <h1 className='text-3xl my-3 lg:my-6 text-center underline'>{meal.strMeal}</h1>
        <div className="lg:flex justify-center gap-10 items-center">
            <img src={meal.strMealThumb} className='mb-3 w-[100%] lg:w-[400px] h-[300px] md:h-[550px] rounded' alt="" />
            <p className='mb-3 lg:w-[500px] text-1xl'>{meal.strInstructions}</p>
        </div>
        
    </div>
  )
}

export default Detail
