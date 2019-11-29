import React, {useState, useEffect} from "react";
import User from "../User";
import "./guestsTable.css";
import {useSelector} from "react-redux";

export const GuestsTable = () => {
  const peoples = useSelector(store => store.peoples);

  const peoplesList = peoples.map(pipl => {
    return <User key={pipl.id} id={pipl.id} name={pipl.name} age={pipl.age} />;
  });
  return <div className="jumbotron userList">{peoplesList}</div>;
};
