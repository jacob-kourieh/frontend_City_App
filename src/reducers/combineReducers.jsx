import { combineReducers } from "redux";
import { citiesReducer } from "./citiesReducer";


//använda combineReducersi och spara min cities data på en function och sen skickar den till min store.
const reducers = combineReducers({
    allProducts: citiesReducer
});
export default reducers;