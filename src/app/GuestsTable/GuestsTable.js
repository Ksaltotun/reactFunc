import React from "react";
import User from "../User";
import "./guestsTable.css";
import {useSelector} from "react-redux";
import Spiner from "../Spiner";

export const GuestsTable = () => {
  const {peoples, spiner} = useSelector(store => store);

  return (
    <div className="jumbotron userList">
      {peoples.map(pipl => {
        return <User key={pipl.id} id={pipl.id} name={pipl.name} age={pipl.age} />;
      })}
      {spiner ? <Spiner /> : null}
    </div>
  );
};
