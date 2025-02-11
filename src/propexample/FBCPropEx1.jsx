import React from "react";

const FBCPropEx1 = ({ isLoggedIn, username }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome, {username}!</h1> : <h1>Please Login First!</h1>}
    </div>
  );
};

export default FBCPropEx1;
