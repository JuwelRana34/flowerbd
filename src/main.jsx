import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Meal from './components/meal/Meal.jsx';
import MealDetails from './components/mealdetails/mealdetails.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/meal',
    element: <Meal />
  },
  {
    path:"/mealdetails/:idCategory",
    element:<MealDetails/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
