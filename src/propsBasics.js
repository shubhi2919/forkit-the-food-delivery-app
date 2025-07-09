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

const RestaurantCard = (props) => {
  console.log(props); // Object = cuisine: "South Indian", resName: "Rameshwaram Cafe"
//Object= cuisine: "Continental", resName: "KFC"
//destructuring props
  const {resName, cuisine, rating, duration} = props;
  //destructuring on the fly (below line)
  // const RestaurantCard = ({resName, cuisine}) => {
  return (
    <div className='res-card' style={styleCard}>
      <img alt='card-logo' style={{width:"100%"}} src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/edec78a57012c218745c734e47fd2c83'/>
      {/* use props to get the values passed from parent component */}
      {/* replace static data of name and cuisine (normal way without this line - const {resName, cuisine} = props; ) */}
      {/* <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4> */}
      {/* using destructured value */}
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
       <h4>{rating}</h4>
      <h4>{duration}</h4>
      {/* <h3>Rameshwaram Cafe</h3>
      <h4>South Indian</h4> */}
      {/* <h4>4.3 stars</h4>
      <h4>25 mins</h4> */}
    </div>
  )
}

  

const Body = () =>{
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {/* restaurant card component */}
        {/* pass the properties(props) like name,cuisine,rating here */}
        <RestaurantCard resName = "Rameshwaram Cafe" cuisine="South Indian" rating="4.3" duration="25 mins" />
        <RestaurantCard resName = "KFC" cuisine="Continental" rating="4.4" duration="15 mins"/>
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


