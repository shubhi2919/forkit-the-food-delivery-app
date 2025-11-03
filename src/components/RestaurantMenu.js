import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useMenuInfo from "../utils/useMenuInfo";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () =>{
      const [showIndex,setShowIndex] = useState(null);
      const {resId} = useParams(); 
     
    //we will make a custome hook to fetch data
     const resInfo = useMenuInfo(resId);
    //   console.log(resId);
      if(!resInfo) return <Shimmer/>;
      
      const {name,avgRating,city,cuisines,cloudinaryImageId,costForTwoMessage} = resInfo.cards[2].card.card.info;
      //get the menu data
      const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    //   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards); 
    //   console.log(itemCards);
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
      // console.log(categories);

      //props drilling example
      const dummy = "dummy data";
       return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl p-1">{name}</h1>
            <p className="text-lg font-bold">{cuisines.join(",")} - {costForTwoMessage}</p>
            {/* from where am i getting index? Its a second parameter of map func */}
            <ul>{categories.map((category,index)=>
                <RestaurantCategory key={category?.card?.card.title} itemPresent={index===showIndex && true} 
                setShowIndex={()=>{setShowIndex(index)}} dummy={dummy} data={category?.card?.card}/>
            )}</ul>
        </div>
        //without tailwind old code
        // <div className="menu-container">
        //     {/* now we need state var to update the data on UI */}
        //     {/* <h1>{resInfo.cards[2].card.card.info.name}</h1> */}
        //     {/* destructure this */}
        //     <h1>{name}</h1>
        //     <h3>{avgRating}</h3>
        //     <h3>{costForTwoMessage}</h3>
        //     <p>{cuisines.join(",")}</p>
        //     <ul>
        //         {/* <li>{itemCards}</li> */}
        //         {/* <li>Burgir</li> */}
        //         {/* <li>{itemCards[0].card.info.name}</li>
        //          <li>{itemCards[1].card.info.name}</li>
        //           <li>{itemCards[2].card.info.name}</li> */}
        //           {/* now iterate with map over itemCards arr */}
        //         {itemCards.map((items)=>{
        //             return <li key={items.card.info.id }>{items.card.info.name } - Rs {items.card.info.price/100}</li>
        //         })}
        //     </ul>
        // </div>
    )
}

export default RestaurantMenu;