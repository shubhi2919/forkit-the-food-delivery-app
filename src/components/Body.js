import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";




const Body = () =>{
  
  //use mockData
  // const [listOfRestaurants,setListOfRestaurants] = useState(resData);
const [listOfRestaurants,setListOfRestaurants] = useState([]);
//need to keep copy of og listOfRestaurants to filter the data again and again if i dont the serch will happen only on filtered data

const [filterRestaurants, setFilterRestaurants] = useState([]);
const [searchText, setSearchText] = useState("");
  //useEffect hook
  // useEffect(()=>{
  //   console.log("useEffect called");
  // },[])
  
  useEffect(
   ()=>{
    fetchData();
   },
   []);
 //use async function to fetch data from API and await for the response
   const fetchData = async() =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
// data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      //update the state variable as soon as we get data from api with setListOfRestaurants
      // setListOfRestaurants( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//do same for filterRestaurants 
      // setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

       setListOfRestaurants( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//do same for filterRestaurants 
      setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }
   
   //spinner while api loads data
   //condional rendering
    //if listOfRestaurants is empty then show shimmer component
  //  if(listOfRestaurants.length === 0){
  //   return <Shimmer/>
  //   // return <h1>Loading....</h1>
  //   // return (
  //   //   <div className='spinner'>
  //   //     <img alt='spinner' src="data:image/jpeg;base64,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" />
  //   //   </div>
  //   // )
  //  }

  //get the online status using custom hook
const onlineStatus = useOnlineStatus();
if(onlineStatus === false){
  return (
    <div style={{display: "flex",flexDirection: "column", margin: "30px"}}>
      <img style={{display:"block",margin: "auto", width: "200px"}} src="data:image/png;base64,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"/>
      <h1 style={{textAlign:"center"}}>Looks like you are offline, please check your internet connection</h1>
    </div>
  )
}

  return listOfRestaurants.length === 0? <Shimmer/> :(
    <div className='body'>
      <div className='filter flex justify-between items-center'>
        <div className="search m-4 p-4">
          {/* bind value with local state var */}
          <input className="border border-solid border-black" type="text" value={searchText} onChange={
            (e)=>{
              setSearchText(e.target.value);
            }
          }/>
          <button className="search-btn m-4 px-4 py-0.5 bg-green-100 rounded-lg" onClick={
            ()=>{
              // searching is happening on the listOfRestaurants state variable which has all data
             const searchedResult =  listOfRestaurants.filter((res)=>{
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              })
              setFilterRestaurants(searchedResult);//update the state variable with the searched result
              // setSearchText(""); //clear the search box after search
            }
          } >Search</button>
        </div>
        <div>
            <button className="filter-btn  m-4 px-4 py-0.5 bg-green-100 rounded-lg" 
        onClick={() => {
            //filter the restaurant data
          //  listOfRestaurants =  listOfRestaurants.filter((res)=> res.info.avgRating >= 4);
          //  console.log(listOfRestaurants);
          //modify the state variable with setListOfRestaurants
          const filteredList = listOfRestaurants.filter((res)=>{
            return res.info.avgRating >= 4.3;
          })
          setFilterRestaurants(filteredList);
        }}>
            Top-rated Restaurant</button>
        </div>
    
      </div>
      <div className='res-container flex flex-wrap'>
        {/* restaurant card component */}
        {/* pass the properties(props) as resObj which is an object */}
         {/* {
          listOfRestaurants.map((res) => (
            <RestaurantCard key={res.info.id} resData={res} />
          ))
        } */}
         {
          filterRestaurants.map((res) => (
            
           <Link key={res?.info.id} to={"/restaurants/"+res?.info.id}><RestaurantCard  resData={res} /></Link> 
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