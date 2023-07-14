// Refactor using the code below. Create the functionality for a reusable button component that will accept ‘title’ as props that will display as the text of the button when rendered inside of App.js.
// Render the button twice with the titles:  “Add to cart”  and  “Find out more”
// Explain your code. Describe how props work. What is the difference between props and state?

import React from "react";

// Create a component to render the button
// Pass in props so that they can be used dynamically within the component
const MyButton = (props) => {
  // Then assign the text within the button tag to {props.title}
  // We use the curly braces to tell the jsx file that JavaScript is being returned
  // Then, in the App.js file where we call this component we will assign its prop title which will be then pulled in here and rendered
  return <button>{props.title}</button>;
};

export default MyButton;

// Props:

// Props in React are data passed from a parent component to its child component,
// allowing the parent to dynamically render them in the child.

//Props vs. State:

// Props are read-only data for configuring components, 
// while state can be updated and changed by the component's
// logic to handle component-specific behavior.
