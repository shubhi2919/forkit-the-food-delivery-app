import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";




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

  return listOfRestaurants.length === 0? <Shimmer/> :(
    <div className='body'>
      <div className='filter'>
        <div className="search">
          {/* bind value with local state var */}
          <input className="search-box" type="text" value={searchText} onChange={
            (e)=>{
              setSearchText(e.target.value);
            }
          }/>
          <button className="search-btn" onClick={
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
        <button className="filter-btn" 
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
      <div className='res-container'>
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