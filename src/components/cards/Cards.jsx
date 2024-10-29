import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
import { NavLink } from "react-router-dom";


function Cards({ cardinfo }) {
  console.log(cardinfo);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center py-5 ">
      {cardinfo.map((card) => {
        return(
< Card  Key={card.idCategory} className="max-w-96" >
          <CardHeader>
            <img
              src={card.strCategoryThumb}
              className="rounded-t-xl"
              alt="image"
              width={600}
              height={300}
            />
          </CardHeader>
          <CardContent className="space-y-3">
            <CardTitle>{card.strCategory}</CardTitle>
            {/* <CardDescription>{card.strCategoryDescription}</CardDescription> */}
            <NavLink to={`/mealdetails/:${card.idCategory}`}>

            <Button className="bg-blue-500 w-full mt-5">Buy Now</Button>
            </NavLink>
          </CardContent>
        </Card>
        )
        
      })}
    </div>
  );
}

export default Cards;
