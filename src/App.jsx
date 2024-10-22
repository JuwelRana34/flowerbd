import { useState, useEffect} from 'react'
import './App.css'
import FlowerCard from './components/FlowerCard'

function App() {
  const [flowersdata, setFlowersdata] = useState([])
  const [flowersName, setFlowersName] = useState([])


  useEffect(() => {
 const data =() => {
  fetch("data.json")
  .then(res=>res.json())
  .then(data=> setFlowersdata(data))
 }
 data()
  }, [])

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


  return (
    <>
      <h1 className='bg-green-50 text-center py-4 text-xl font-bold'>flower shop</h1>
      <div className='md:flex '>


      <div className='grid md:grid-cols-2 my-5 space-y-4 justify-items-center gap-2 pb-2 md:w-[70%]'>
 
      {flowersdata.map(flower=>
        <FlowerCard handelClick={handelClick} key={flower.id} flower={flower}/>

      )}
      </div>


      <div className='bg-gray-100 rounded-lg w-5/6 mx-auto md:w-[30%] mr-5 my-5 p-4 space-y-2'>
        <h1 className='text-center bg-orange-500 rounded-md p-3 text-xl font-semibold text-white'>length : {flowersName.length} </h1>
        <div className=' space-y-2 '>
          {flowersName.map((name,index) => (
            <div key={index}>
              <p className='bg-white py-2  rounded text-gray-700 text-center font-semibold'
              onClick={()=>handelDelete(name)}
              >{name}</p>
            </div>
          ))}
        </div>
      </div>

      </div>
      
    </>
  )
}

export default App
