import * as redux from "redux";
import { projectReducer } from "./Project-Reducer";
import { selectedProjectReducer } from "./Project-Reducer";
import {currentReducer} from './Current-Reducer';
import { authReducer } from "./auth-reducer";
import thunk from "redux-thunk";

export const init = () => {
  const reducer = redux.combineReducers({
    projectReducer,
    selectedProjectReducer,
    currentReducer,
    authReducer
  });
  const store = redux.createStore(reducer, redux.applyMiddleware(thunk));
  return store;
};
