import { useState } from "react";

const User = (props) =>{
    const [count,setCount] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-info">
            {/* <p>Name : Shubhi Bhatnagar</p>
            <p>Location : Hyderabad</p>
            <p>Bio : Software Engineer</p> */}
            {/* pass props */}
            <p>Count : {count}</p>
            <button onClick={()=>{
                setCount(count+1)
            }}>Functional Increment</button>
            <p>Count : {count2}</p>
            <p>Name : {props.name}</p>
            <p>Location : Hyderabad</p>
            <p>Bio : Software Engineer</p>
        </div>
    )
}
export default User;