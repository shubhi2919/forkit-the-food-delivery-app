import { useEffect } from "react";
import { useState } from "react";

const useMenuInfo = (resId) =>{
    const [resInfo,setResinfo] = useState(null);
   //fetch data from API
   //to fetch data from API, we will use useEffect hook
   useEffect(()=>{
     fetchData();
   },[]);
   const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+resId);
        const json = await data.json();
        setResinfo(json?.data);
    }   
   return resInfo;
}

export default useMenuInfo;