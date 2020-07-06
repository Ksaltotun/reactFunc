import React from "react";
import User from "../User";
import "./guestsTable.css";
import {useSelector} from "react-redux";
import Spiner from "../Spiner";

export const GuestsTable = ({onDeletePeople}) => {
  const spiner = useSelector(({spiner}) => spiner);
  const peoples = useSelector(({peoples}) => peoples);

  return (
    <div className="jumbotron userList">
      {peoples.map(pipl => {
        return (
          <User
            key={pipl.id}
            id={pipl.id}
            name={pipl.name}
            age={pipl.age}
            onDeletePeople={onDeletePeople}
          />
        );
      })}
      {spiner ? <Spiner /> : null}
    </div>
  );
};
