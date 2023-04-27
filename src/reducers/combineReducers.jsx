import { combineReducers } from "redux";
import { citiesReducer } from "./citiesReducer";


const reducers = combineReducers({
    allProducts: citiesReducer
});
export default reducers;