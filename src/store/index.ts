/**
 * store center
 * author
 * time
 */
import { createStore, combineReducers } from 'redux';
import { homeReducer } from "./reducers/home";

const allReducer = combineReducers({
    home: homeReducer
});

const store = createStore(allReducer);

export default store;
