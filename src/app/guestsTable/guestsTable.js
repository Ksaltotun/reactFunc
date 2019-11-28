import React, {useState, useEffect} from "react";
import User from "../user";
import "./guestsTable.css";

export const GuestsTable = props => {
  const [usersList, addFunction] = useState({});
  const {peoples} = props;
  const peoplesList = peoples.map(pipl => {
    return <User key={pipl.id} name={pipl.name} age={pipl.age} />;
  });
  return <div className="jumbotron userList">{peoplesList}</div>;
};
