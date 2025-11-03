import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import AboutUs from './components/AboutUs';
import AboutUsClass from './components/AboutUs';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
// import Grocery from './components/Grocery';
import { lazy } from 'react';
import UserContext from './utils/UserContext';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';


const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () =>{
  //user authentication logic
  const [userInfo,setUserInfo] = useState();
  useEffect(()=>{
    //make api call and send username and pwd here
    //below using dummy data as no api is available
    const data = {
      name : "Shubhi Bhatnagar",
    }
    setUserInfo(data.name)
  },[])
  return (
  <Provider store={appStore}>
      {/* //default */}
    {/* //passing setUserInfo to context also so that we can update the user info from anywhere in the app */}
    <UserContext.Provider value={{loggedInuser:userInfo,setUserInfo }}> 
    <div className='app'>
      {/* nested context */}
      <UserContext.Provider value={{loggedInuser:"Elon Musk"}}>
         <Header/>
      </UserContext.Provider>
     
      {/* <Body/> */}
      <Outlet/> 
      {/* Outlet is a placeholder for the child components ..header will stay intact*/}
      {/* It will render the component based on the current route */}
      {/* For example, if the route is /about, it will render AboutUs component */}
      {/* If the route is /, it will render Body component */}
    </div>
     </UserContext.Provider>
  </Provider>
  )
}

const appRoute = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path: "/",
        element:<Body/> 
      },
    //   { 
    // path : "/about",
    // element:<AboutUs/>
    //   },
      { 
    path : "/about",
    element:<AboutUsClass/>
      },
    {
      path : "/contact",
      element:<Contact/>
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    },
    {
      path :  "/cart",
      element:<Cart/>
    },
    {
      path:"/grocery",
      // element:<Grocery/>
       element:<Suspense fallback={<h1>Loading grocery....</h1>}><Grocery/></Suspense>
    }
    ],
    errorElement:<Error/>
  },
  //we need to make below as children of the root path
  // {
  //   path : "/about",
  //   element:<AboutUs/>
  // },
  // {
  //   path : "/contact",
  //   element:<Contact/>
  // }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

//render a react functional component
// root.render(<AppLayout/>)

//render using react router
root.render(RouterProvider({router:appRoute}))


