import React from "react";
import "./App.css";
import InputForm from "./InputForm";
import GuestsTable from "./GuestsTable";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers";
import {getPeoples} from "../actions";

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getPeoples());
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
