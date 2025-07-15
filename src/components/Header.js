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
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL}/>
        <h1 className='logo-name'>ForkIt</h1>
      </div>
      <div className='nav-items'>
         <ul>
          <li>Online Status : {onlineStatus?"✅":"🔴"}</li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"grocery"}>Grocery</Link></li>
          <li><Link to={"about"}>About Us</Link></li>
          <li><Link to={"contact"}>Contact Us</Link></li>
          <li>Cart</li>
          <button onClick={
            ()=>{
              setIsLoggedIn(isLoggedIn===false);
            }
          } className="login">{isLoggedIn?"Login":"LogOff"}</button>
         </ul>
      </div>
    </div>
  )
}

export default Header;