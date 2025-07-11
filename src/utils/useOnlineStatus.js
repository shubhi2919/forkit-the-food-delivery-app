import { useState, useEffect } from 'react';

//this function will return boolean value no i/p required

const useOnlineStatus = () =>{
    const [onlineStatus,setOnlineStatus] = useState(true);
     //useeffect to add the listener only once 
     //and remove the listener when component unmounts
     useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });
     },[])
     return onlineStatus;
}

export default useOnlineStatus;