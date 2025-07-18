import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenuInfo from "../utils/useMenuInfo";

const RestaurantMenu = () =>{

      const {resId} = useParams(); 
     
    //we will make a custome hook to fetch data
     const resInfo = useMenuInfo(resId);
      console.log(resId);
      if(!resInfo) return <Shimmer/>;
      const {name,avgRating,city,cuisines,cloudinaryImageId,costForTwoMessage} = resInfo.cards[2].card.card.info;
      //get the menu data
      const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card 
      console.log(itemCards);
       return (
        <div className="menu-container">
            {/* now we need state var to update the data on UI */}
            {/* <h1>{resInfo.cards[2].card.card.info.name}</h1> */}
            {/* destructure this */}
            <h1>{name}</h1>
            <h3>{avgRating}</h3>
            <h3>{costForTwoMessage}</h3>
            <p>{cuisines.join(",")}</p>
            <ul>
                {/* <li>{itemCards}</li> */}
                {/* <li>Burgir</li> */}
                {/* <li>{itemCards[0].card.info.name}</li>
                 <li>{itemCards[1].card.info.name}</li>
                  <li>{itemCards[2].card.info.name}</li> */}
                  {/* now iterate with map over itemCards arr */}
                {itemCards.map((items)=>{
                    return <li key={items.card.info.id }>{items.card.info.name } - Rs {items.card.info.price/100}</li>
                })}
            </ul>
        </div>
    )
}

export default RestaurantMenu;