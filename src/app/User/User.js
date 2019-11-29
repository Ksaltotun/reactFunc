import React from "react";
import "./user.css";
import {Button} from "react-bootstrap";
import {Badge} from "react-bootstrap";
import {deletePeople} from "../../actions";
import {useDispatch} from "react-redux";

export const User = props => {
  const {name, age, id} = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deletePeople(id));
    console.log(id);
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
