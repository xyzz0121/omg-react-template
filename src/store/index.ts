/**
 * store center
 * zhouyang20
 * 2019.03.29
 */
import { createStore, combineReducers } from 'redux';
import { homeReducer } from "./reducers/home";

const allReducer = combineReducers({
    home: homeReducer
});

const store = createStore(allReducer);

export default store;
