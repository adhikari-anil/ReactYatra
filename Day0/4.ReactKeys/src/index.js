import React from "react";
import ReactDOM from "react-dom/client";

/* Using JSX means using HTML and JS together or we can insert js code inside html tags just inside {}...

const text = "In this we actually focus in JSX, Conditional Rerender, Different Components..";
const div = <div>{text}</div>
*/

//Lets see conditional re-rendering...

const isMorning = true;
const morningText = " GoodMorning ";
const afternoonText = " Afternoon ";

const morningElement = (
  <div>
    {morningText}
    <span onClick={() => handleClick(afternoonText)}>it is 8am</span>
  </div>
);
const afternoonElement = (
  <div>
    {afternoonText} <span onClick={() => handleClick(afternoonText)}>it is 11pm</span>
  </div>
);
const div = isMorning ? morningElement : afternoonElement;   // here we did conditional rendering using ternary operator

const handleClick = (state) => {
    console.log("Click detected and Message is : ", state);
  };
  

// Functional Components => Regular function that return react elements...
const GreetingCompo = () => <>
{div}
I am inside a Component
</>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GreetingCompo />);
