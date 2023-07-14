import React, { useEffect, useState } from 'react'
import Meals from './components/Meals'
import { Link, Route, Routes } from 'react-router-dom'
import Detail from './components/Detail'
import Nav from './components/Nav'

const App = () => {

  const [search,setSearch] = useState("")
  const [filtermeals,setFiltermeals]= useState([])
  const [meals, setMeals] = useState([])

  useEffect(() => {
    fetchData()   
  }, [])

  useEffect(()=>{
    filterMeals()
  },[search])
  

  const fetchData = async()=>{
      const api = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
      const {meals} = await api.json()
      setMeals(meals)
      setFiltermeals(meals)
  }

  const filterMeals = ()=>{
    const filterArr = meals.filter((meal)=>meal.strMeal.toLowerCase().includes(search.toLowerCase()))
    setFiltermeals(filterArr)
  }


  return (
    <div>
      <Nav search={search} setSearch={setSearch} filterArr={filtermeals} />
      <Routes>
        <Route path={"/detail/:id"} element={<Detail  />}  />
        <Route path={"/"} element={<Meals meals={meals} filtermeals={filtermeals} />} />
      </Routes>

    </div>
  )
}

export default App
