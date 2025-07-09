import { useRouteError } from "react-router-dom";

//we can also use router hook to provide error handling
const Error = () =>{
    const err = useRouteError();
    console.log(err);
    //we can also use err.status and err.statusText from obj displayed on console to display error messages
    return (
        <div>
           < h1> Oops! Something went wrong.</h1>
              <h2>{err.status} : {err.statusText}</h2>
            <p>We couldn't find the page you were looking for.</p>  
        </div>
    )
}

export default Error;