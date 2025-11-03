import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data}) =>{
    // console.log(data);
   //to close and open the accordian we need state variable
   const [itemPresent,setItemPresent] = useState(false);
    const handleClick = () =>{
    //if itemPresent is true then set it to false and vice versa
    //this will toggle the value of itemPresent
    setItemPresent(!itemPresent);
}
    return (
        <div>
            {/* accordian header */}
            <div onClick={handleClick} className=" w-6/12 bg-gray-100 mx-auto my-4 p-4 shadow-lg ">
               <div className="cursor-pointer flex justify-between">
                 <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>{itemPresent?"⬆️":"⬇️"}</span>
               </div>
                 {/* accordian body */}
                 {itemPresent &&  <ItemList items={data.itemCards}/>}
                
            </div>
           
        </div>
    )
}

export default RestaurantCategory;