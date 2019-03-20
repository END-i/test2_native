import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { products } from "./products/reducers";

const rootReducer = combineReducers({
  products
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store
