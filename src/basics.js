import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const heading = React.createElement("h1",{id:"heading"},"This is main file of app");
//using JSX
//react element
const nestedElem = <h2>I am nested element</h2>
const jsxheading = (<h1 id="heading">
  This is heading with JSX also ex for injecting react element into component
  {nestedElem}
  {/* we can also nest componet like <SomeComponent/> but it should be initialized before */}
  </h1>
  )
console.log(jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

//js var to inject in jsx
const number = 100;
// React functional component
const FunctionalHeading = () =>
   (
   <div className='container'>
    {/* below I have nested title component */}
    <Title/> 
    {/* {Title()}
    <Title></Title>  */}
    {/* // all above are same */}
   <h1>Hi I am functional component heading</h1>
   {/* inject javascript inside jsx with {} */}
   <h2>{2+3}</h2>
   <h2>{console.log("js inside jsx")}</h2>
   {number}
   {/* inject react element */}
   {jsxheading}
   </div>
   )

//or
// const FunctionalHeading2 = () => <h1>Hi I am functional component heading</h1>
//or
// const FunctionalHeading3 = () => {return <h1>Hi I am functional component heading</h1>}
//above all are same if in single line then we can use arrow function without return keyword

//render a react element
// root.render(jsxheading);

//nested functional component
const Title = ()=> <h2>Title for nested functional component</h2>

//render a react functional component
root.render(<FunctionalHeading/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
