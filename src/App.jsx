import { useState, useEffect} from 'react'
import './App.css'
import FlowerCard from './components/FlowerCard'
import { NavbarComponent } from './components/navbar/NavbarComponent'
import { Outlet } from 'react-router-dom'

function App() {
  const [flowersdata, setFlowersdata] = useState([])
  const [flowersName, setFlowersName] = useState(() => {
    // Retrieve the flower names from localStorage if available
    const savedFlowers = localStorage.getItem('flowersNames');
    return savedFlowers ? JSON.parse(savedFlowers) : [];
  })


  useEffect(() => {
 const data =() => {
  fetch("data.json")
  .then(res=>res.json())
  .then(data=> setFlowersdata(data))
 }
 data()
 
  }, [])

  useEffect(() => {
    // Save the flower names to localStorage whenever it changes
    localStorage.setItem('flowersNames', JSON.stringify(flowersName));
  }, [flowersName]);

  const handelClick = (name) =>{
    if (!flowersName.includes(name)){
       setFlowersName([...flowersName, name])
    }else{
      alert('you have already added this item to the list')
      return
    }
       
  }

  const handelDelete = (name) => {
    const updatedFlowers = flowersName.filter(item => item!==name)
    setFlowersName(updatedFlowers)
  }

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };



  return (
    <>
    <NavbarComponent />
    
      <h1 className='bg-green-50 text-center py-4 text-xl font-bold'>flower shop</h1>
      <div className='md:flex '>


      <div className='grid px-4 md:grid-cols-2 my-5 space-x-4 space-y-4 justify-items-center gap-2 pb-2 md:w-[70%]'>
 
      {flowersdata.map(flower=>
        <FlowerCard handelClick={handelClick} key={flower.id} flower={flower}/>

      )}
      </div>


      <div className='bg-gray-100 rounded-lg w-5/6 mx-auto md:w-[30%] mr-5 my-5 p-4 space-y-2'>
        <h1 className='text-center bg-orange-500 rounded-md p-3 text-xl font-semibold text-white'>length : {flowersName.length} </h1>
        <div className=' space-y-2 '>
          {flowersName.map((name,index) => (
            <div key={index}>
              <div className={`flex justify-between items-center  py-2 px-4  rounded text-gray-700 text-center font-semibold bg-gradient-to-r ${index % 2 == 0?"from-violet-400 to-purple-200": "from-purple-200 to-violet-400"  }`}>

              <p>{name}</p> 
              {/* <p>{price}</p> */}
              <button className='text-rose-500 bg-red-300 p-2 rounded-md hover:bg-red-400 hover:text-red-600' onClick={()=>handelDelete(name)}> delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>

      <button
        className={activeButton === 'button1' ? 'active' : ''}
        onClick={() => handleButtonClick('button1')}
      >
        Button 1
      </button>

      <button
        className={activeButton === 'button2' ? 'active' : ''}
        onClick={() => handleButtonClick('button2')}
      >
        Button 2
      </button>
      
    </>
  )
}

export default App
