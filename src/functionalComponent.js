import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


//inline css in react
const styleCard = {
  backgroundColor: "#f0f0f0",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
}

const Header = () =>{
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src='https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png'/>
        <h1 className='logo-name'>ForkIt</h1>
      </div>
      <div className='nav-items'>
         <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
         </ul>
      </div>
    </div>
  )
}

const RestaurantCard = () => {
  return (
    <div className='res-card' style={styleCard}>
      <img alt='card-logo' style={{width:"100%"}} src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/edec78a57012c218745c734e47fd2c83'/>
      <h3>Rameshwaram Cafe</h3>
      <h4>South Indian</h4>
      <h4>4.3 stars</h4>
      <h4>25 mins</h4>
    </div>
  )
}

const Body = () =>{
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {/* restaurant card component */}
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  )
}

const AppLayout = () =>{
  return (
    <div className='app'>
      <Header/>
      <Body/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

//render a react functional component
root.render(<AppLayout/>)


