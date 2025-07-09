import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";




let listOfRestaurants2 = [
    {
        info: {
        id: "1",
        name: "Rameshwaram Cafe",
        cuisines: ["South Indian"],
        avgRating: 4.3,
        costForTwo: "₹300 for two",
        sla: {
            deliveryTime: 25
        },
        cloudinaryImageId: "edec78a57012c218745c734e47fd2c83"
        }
    },
    {
        info: {
        id: "2",
        name: "KFC",
        cuisines: ["Continental"],
        avgRating: 3.3,
        costForTwo: "₹500 for two",
        sla: {
            deliveryTime: 30
        },
        cloudinaryImageId: "edec78a57012c218745c734e47fd2c83"
        }
    }
];

const Body = () =>{
  // let [listOfRestaurants,setListOfRestaurants] =  useState([
  //    {
  //       info: {
  //       id: "1",
  //       name: "Rameshwaram Cafe",
  //       cuisines: ["South Indian"],
  //       avgRating: 4.3,
  //       costForTwo: "₹300 for two",
  //       sla: {
  //           deliveryTime: 25
  //       },
  //       cloudinaryImageId: "edec78a57012c218745c734e47fd2c83"
  //       }
  //   },
  //   {
  //       info: {
  //       id: "2",
  //       name: "KFC",
  //       cuisines: ["Continental"],
  //       avgRating: 3.3,
  //       costForTwo: "₹500 for two",
  //       sla: {
  //           deliveryTime: 30
  //       },
  //       cloudinaryImageId: "edec78a57012c218745c734e47fd2c83"
  //       }
  //   }
  // ]);
  //use mockData
  const [listOfRestaurants,setListOfRestaurants] = useState(resData);
  return (
    <div className='body'>
      <div className='filter'>
        <button className="filter-btn" 
        onClick={() => {
            //filter the restaurant data
          //  listOfRestaurants =  listOfRestaurants.filter((res)=> res.info.avgRating >= 4);
          //  console.log(listOfRestaurants);
          //modify the state variable with setListOfRestaurants
          const filteredList = listOfRestaurants.filter((res)=>{
            return res.info.avgRating >= 4.3;
          })
          setListOfRestaurants(filteredList);
        }}>
            Top-rated Restaurant</button>
      </div>
      <div className='res-container'>
        {/* restaurant card component */}
        {/* pass the properties(props) as resObj which is an object */}
         {
          listOfRestaurants.map((res) => (
            <RestaurantCard key={res.info.id} resData={res} />
          ))
        }
        {/* use map for optimized code */}
        {/* <RestaurantCard resData = {resData[0]} />
        <RestaurantCard resData = {resData[1]}/> */}
        
      </div>
    </div>
  )
}

export default Body;