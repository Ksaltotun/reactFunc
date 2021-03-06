import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers";
import {getPeoples, pushPeople, deletePeople} from "../saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getPeoples);
