import {CDN_IMG_URL} from "../utils/constants";
//inline css in react
const styleCard = {
  backgroundColor: "#f0f0f0",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
}
const RestaurantCard = (props) => {
  // console.log(props); // Object = cuisine: "South Indian", resName: "Rameshwaram Cafe"
//Object= cuisine: "Continental", resName: "KFC"
//destructuring props
  const {resData} = props;
  // console.log(resData);
  //destructuring on the fly (below line)
  // const RestaurantCard = ({resName, cuisine}) => {
  return (
    <div className='res-card' style={styleCard}>
      <img alt='card-logo' style={{width:"100%"}} 
      // str concatenation is js so used curly braces {}
      src={CDN_IMG_URL+resData.info.cloudinaryImageId}/>
      {/* use props to get the values passed from parent component */}
      {/* replace static data of name and cuisine (normal way without this line - const {resName, cuisine} = props; ) */}
      {/* <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4> */}
      {/* using destructured value */}
      <h3>{resData.info.name}</h3>
      <h4>{resData.info?.cuisines.join(",")}</h4>
      <h4>{resData.info.costForTwo}</h4>
       <h4>{resData.info?.avgRating} stars</h4>
      <h4>{resData.info?.sla.deliveryTime} mins</h4>
      {/* <h3>Rameshwaram Cafe</h3>
      <h4>South Indian</h4> */}
      {/* <h4>4.3 stars</h4>
      <h4>25 mins</h4> */}
    </div>
  )
}

export default RestaurantCard;