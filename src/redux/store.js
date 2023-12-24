import { createStore } from "redux";
import { countReducers } from "./reducer";
const store = createStore(countReducers);
export default store;
