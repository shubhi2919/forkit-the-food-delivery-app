import { useContext } from "react";
import {CDN_IMG_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";
//inline css in react
const styleCard = {
  backgroundColor: "#f0f0f0",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
}



const RestaurantCard = (props) => {
  //use context
const {loggedInuser} = useContext(UserContext)
  // console.log(props); // Object = cuisine: "South Indian", resName: "Rameshwaram Cafe"
//Object= cuisine: "Continental", resName: "KFC"
//destructuring props
  const {resData} = props;
  // console.log(resData);
  //destructuring on the fly (below line)
  // const RestaurantCard = ({resName, cuisine}) => {
  return (
    <div className='res-card m-4 p-4 w-[220px] rounded-lg break-words bg-gray-100 hover:bg-gray-200' >
      <img alt='card-logo' className="rounded-lg" style={{width:"100%"}} 
      // str concatenation is js so used curly braces {}
      src={CDN_IMG_URL+resData.info.cloudinaryImageId}/>
      {/* use props to get the values passed from parent component */}
      {/* replace static data of name and cuisine (normal way without this line - const {resName, cuisine} = props; ) */}
      {/* <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4> */}
      {/* using destructured value */}
      <h3 className="font-bold py-3 text-lg">{resData.info.name}</h3>
      <h4>{resData.info?.cuisines.join(",")}</h4>
      <h4>{resData.info.costForTwo}</h4>
       <h4>{resData.info?.avgRating} stars</h4>
      <h4>{resData.info?.sla.deliveryTime} mins</h4>
      <h4>{loggedInuser}</h4>
      {/* <h3>Rameshwaram Cafe</h3>
      <h4>South Indian</h4> */}
      {/* <h4>4.3 stars</h4>
      <h4>25 mins</h4> */}
    </div>
  )
}

//contract of HIGHER ORDER COMPONENT
//it will take RestaurantCard as i/p and return a new component which will tell if res is open or closed
export const isRestaurantOpen = (RestaurantCard)=>{
  //read/recieve  the props from RestaurantCard thats why wrote props
  return (props)=>{
    //  console.log(props)
     
    return(
     
      <div>
        <label className="absolute bg-black p-3 m-2 rounded-lg text-white">Open Now </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}


export default RestaurantCard;