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
  const {resData} = props;
  console.log(resData);
  //destructuring on the fly (below line)
  // const RestaurantCard = ({resName, cuisine}) => {
  return (
    <div className='res-card' style={styleCard}>
      <img alt='card-logo' style={{width:"100%"}} 
      // str concatenation is js so used curly braces {}
      src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+resData.info.cloudinaryImageId}/>
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

//mock object
const resData = {
  
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "487211",
                      "name": "BOX8 - Desi Meals",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/821f692b-57a9-4304-9c2b-cd847e59775a_487211.jpg",
                      "locality": "Vaibhav Nagar",
                      "areaName": "Khairatabad",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Thalis",
                        "Home Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "10655",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "3.0K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-31 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Mughlai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Mughlai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9d043bd8-7ac6-42d2-9657-a6881329638c"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/box8-desi-meals-vaibhav-nagar-khairatabad-rest487211",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              }
  

const Body = () =>{
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {/* restaurant card component */}
        {/* pass the properties(props) as resObj which is an object */}
        <RestaurantCard resData = {resData} />
        <RestaurantCard resData = {resData}/>
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


