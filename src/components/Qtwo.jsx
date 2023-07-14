// Create a new component called Avatar.
// Given the following variable for a user, display the content inside the Avatar component when rendered.
// Explain your code. Describe how curly braces are useful to display data.

import React from "react";

// Create component to render the "Avatar"
// Pass in user props, with user in curly braces to destructure the props (in order to just call user.value)
const Avatar = ({ user }) => {
  return (
    <div>
      {/* Pass the needed user props into the tags to display that prop dynamically as the text */}
      <h2>{user.name}</h2>
      {/* Here we will pass the props in as values to be rendered within the image tag */}
      {/* These props will render the image as well as the alt and sizing */}
      <img src={user.imageUrl} alt={user.name} style={{ width: user.imageSize }} />{" "}
    </div>
  );
};

export default Avatar;

// How are curly braces are useful to display data?

// Curly braces are useful for displaying data dynamically. 
// They allow us to incorporate JavaScript code within HTML elements, 
// enabling the retrieval and display of variables and values in real-time.
