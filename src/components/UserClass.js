import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        console.log("Child constructor called");
         super(props);
         //we need to call super(props) to access this.props in the constructor
        // React Router caught the following error during render ReferenceError: Must call 
        // super constructor in derived 
        // class before accessing 'this' or returning from derived constructor
        // console.log(props);
        //State variables 
        this.state = {
            count:0,
            count2:2,
        }
    }
     
    componentDidMount(){
        console.log("Child componentDidMount called");
    }
//Lifecycle methods are used to perform side effects in class components
//  Lifecycle methods are called in a specific order
//  Parent constructor called
//  Parent render called
//  Child constructor called
//  Child render called
//  Child componentDidMount called
//  Parent componentDidMount called
    render(){
        //destructuring props
         console.log("Child render called");
        const {name} = this.props;
        //destructuring state var
        const {count,count2} = this.state;
          return (
             <div className="user-info">
                 <p>Count : {count}</p>
                 {/* update state var */}
                 <button onClick={()=>{
                    this.setState(
                        {
                        count: this.state.count +1,
                        count2 : this.state.count2 +1,//if we want to update multiple state variables at once, we can do it like this
                    }
                );
                 }}>Increase Count</button>
                  <p>Count2 : {count2}</p>
                {/* <p>Count : {this.state.count}</p> */}
                {/* //destructure */}
                 <p>Name : {name}</p>
                {/* <p>Name : {this.props.name}</p> */}
            {/* <p>Name : Shubhi Bhatnagar</p> */}
            <p>Location : Hyderabad</p>
            <p>Bio : Software Engineer</p>
        </div>
        )

    }
      
    
}
export default UserClass;