import {LOGO_URL} from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () =>{
  console.log("Header rendered");
  //state var
  let [isLoggedIn,setIsLoggedIn] = useState(true);
  //was checking if useEffect is called on every render,what happens if we pass empty array as dependency or when we pass isLoggedIn as dependency
  //   useEffect(()=>{
  //   console.log("useEffect called");
  // },[isLoggedIn])
  let onlineStatus = useOnlineStatus();

  return (
    <div className='flex justify-between  bg-gray-100 shadow-lg'>
      <div className='flex items-center gap-2 m-4 logo-container'>
        <img className='w-[60px]' src={LOGO_URL}/>
        <span  className="text-2xl font-bold">ForkIt</span>    
      </div>
   
       {/* <h1  className="text-3xl font-bold flex items-center justify-between">ForkIt</h1> */}
      <div className='items-center'>
         <ul className="font-medium flex p-4 m-4" >
          <li className="px-4"> {onlineStatus?"✅":"🔴"} Online Status</li>
          <li className="px-4"><Link to={"/"}>🏠 Home</Link></li>
          <li className="px-4"><Link to={"grocery"}>🥗 Grocery</Link></li>
          <li className="px-4"><Link to={"about"}>👥 About Us</Link></li>
          <li className="px-4"><Link to={"contact"}>☎️ Contact Us</Link></li>
          <li className="px-4">🛒 Cart</li>
          <button onClick={
            ()=>{
              setIsLoggedIn(isLoggedIn===false);
            }
          } className="login">🤵🏻 {isLoggedIn?"Login":"LogOff"}</button>
         </ul>
      </div>
    </div>
  )
}

export default Header;