import React from "react";
import "./user.css";
import {Button} from "react-bootstrap";
import {Badge} from "react-bootstrap";

export const User = props => {
  const {name, age, id, onDeletePeople} = props;

  const handleClick = () => {
    onDeletePeople(id);
  };

  return (
    <div className="jumbotron user">
      <h1>
        <Badge variant="primary">
          name: {name} age: {age}
        </Badge>
      </h1>
      <Button variant="danger" onClick={handleClick}>
        Delete
      </Button>
    </div>
  );
};
