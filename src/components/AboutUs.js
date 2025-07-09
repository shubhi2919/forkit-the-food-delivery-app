import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class AboutUsClass extends React.Component{
    constructor(props){
       super(props);
       console.log("Parent constructor called");
    }

    componentDidMount(){
        console.log("Parent componentDidMount called");
    }

    render(){
        console.log("Parent render called");
        return(
              <div className="about-us">
            <h1>About Us</h1>
            <p>We are a food delivery service dedicated to bringing delicious meals from your favorite restaurants right to your doorstep. Our mission is to make dining out at home as convenient and enjoyable as possible.</p>
            <h3>Created By : </h3> <User name = {"Shubhi B"}/>
            <UserClass name = {"Shubhi Class"}/>
        </div>

        )
    }

}

export default AboutUsClass;

// const AboutUs = () =>{
//     return(
//         <div className="about-us">
//             <h1>About Us</h1>
//             <p>We are a food delivery service dedicated to bringing delicious meals from your favorite restaurants right to your doorstep. Our mission is to make dining out at home as convenient and enjoyable as possible.</p>
//             <h3>Created By : </h3> <User name = {"Shubhi B"}/>
//             <UserClass name = {"Shubhi Class"}/>
//         </div>
//     )
// }

// export default AboutUs;