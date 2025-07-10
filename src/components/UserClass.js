import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        console.log("Child constructor called");
         super(props);
        //State variables 
        this.state = {
           userInfo:{
                name:"default name",
                location:"default location",
                bio:"default bio",
                //this was throwing err since url is dummy
                // avatar_url:"https://dummy.avatars.githubusercontent.com"
           }
        }
    }
     
    async componentDidMount(){
        console.log("Child componentDidMount called");
       const data =  await fetch('https://api.github.com/users/shubhi2919');
       const json = await data.json();
    //    console.log(json);
       //update state var with the fetched data
       this.setState({userInfo:json});
    }
    
    componentDidUpdate(){
        console.log("Child componentDidUpdate called");
        //this is called when the component is updated
        //we can use this to perform side effects like fetching data
        //or updating the state based on props change
    }
     componentWillUnmount(){
        console.log("Child componentWillUnmount called");
        //this is called when the component is unmounted
        //we can use this to clean up resources like timers, event listeners, etc.
     }

     /**
      * 
      * Parent constructor called
        AboutUs.js:28 Parent render called
        UserClass.js:4 Child constructor called
        UserClass.js:40 Child render called
        UserClass.js:19 Child componentDidMount called
        AboutUs.js:13 Parent componentDidMount called
        UserClass.js:40 Child render called
        UserClass.js:28 Child componentDidUpdate called
        AboutUs.js:23 parent componentWillUnmount called
        UserClass.js:34 Child componentWillUnmount called
      */
    render(){
        //destructuring props
         console.log("Child render called");
        // const {name} = this.props;
        //destructuring state var
        const{name,bio,location,avatar_url} = this.state.userInfo;
        
          return (
             <div className="user-info">
                 
               
                {/* //destructure */}
                 {/* <p>Name : {name}</p> */}
                {/* <p>Name : {this.props.name}</p> */}
            {/* <p>Name : Shubhi Bhatnagar</p> */}
            {/* <p>Name: {this.state.userInfo.name}</p> */}
            <img src = {avatar_url} style={{width:"100px",height:"100px"}}/>
             <p>Name: {name}</p>
            <p>Location : {location}</p>
            <p>Bio : {bio}</p>
        </div>
        )

    }
      
    
}
export default UserClass;