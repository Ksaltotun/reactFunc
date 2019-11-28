import React from "react";
import "./user.css";

export const User = (props) => {
  const {name, age} = props;
  return (
    <div className="jumbotron user">
      <span>
        Name: {name} Age: {age}
      </span>
    </div>
  );
};
