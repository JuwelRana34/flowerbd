/* eslint-disable react/prop-types */

function FlowerCard({flower , handelClick}) {

    const{category ,color,description,id,image_url,name,price,rating,stock}= flower

  return (
    <div key={id} className="card bg-base-100 w-full md:w-auto p-3 shadow-xl">
    <figure>
      <img className="w-full object-cover h-[350px]" 
        src={image_url}
        alt={name} />
    </figure>
    <div className="card-body p-8">
      <h2 className="card-title">
       {name}
        <div className="badge badge-secondary">{rating}</div>
      </h2>
      <p>{description}</p>
      <div className="card-actions ">
        <ul className=" list-disc list-inside">
            <li> Category:- {category}</li>
            <li>Color:- {color}</li>
            <li>Stock:- {stock}</li>
            <li>Price:- ${price}</li>
        </ul>
       
        
      </div>
        <button className="badge btn badge-outline"
        onClick={()=>{handelClick(name)}}
        >Add</button>
    </div>
  </div>
  )
}

export default FlowerCard