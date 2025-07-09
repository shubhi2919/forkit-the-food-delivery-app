import React from 'react';
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


const AppLayout = () =>{
  return (
    <div className='app'>
      <Header/>
      {/* <Body/> */}
      <Outlet/> 
      {/* Outlet is a placeholder for the child components ..header will stay intact*/}
      {/* It will render the component based on the current route */}
      {/* For example, if the route is /about, it will render AboutUs component */}
      {/* If the route is /, it will render Body component */}
    </div>
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


