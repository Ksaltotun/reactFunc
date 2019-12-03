import React from "react";
import "./App.css";
import InputForm from "./InputForm";
import GuestsTable from "./GuestsTable";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers";
import {store} from "../stores";
import createSagaMiddleware from "redux-saga";
import {getPeoples, pushPeople, deletePeople} from "../saga";

//const sagaMiddleware = createSagaMiddleware();

//sagaMiddleware.run(getPeoples);
//const handlePushPeople = (name, age) => sagaMiddleware.run(pushPeople, name, age);
//const handleDeletePeople = id => sagaMiddleware.run(deletePeople, id);
const App = () => {
  return (
    <Provider store={store}>
      {
        <div className="app">
          <InputForm />
          <GuestsTable />
        </div>
      }
    </Provider>
  );
};

export default App;
