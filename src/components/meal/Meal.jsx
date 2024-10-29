import { useEffect, useState } from "react"
import { NavbarComponent } from "../navbar/NavbarComponent"
import Cards from "../cards/Cards"


function Meal() {
  const [ meal, setMeal]= useState([])
  
    useEffect(()=>{
    const meal = ()=>{
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res=>res.json())
      .then(data=> setMeal(data.categories))
    }
    meal()
  },[])
  return (
    
    <div>
      <NavbarComponent/>
      <Cards cardinfo={meal}/>
    </div>
  )
}

export default Meal