import { createStore, combineReducers } from "redux";
import { addToCart, transportToHottest } from "./reducers/productsReducer";

const reducers = combineReducers(
  {
    basket: addToCart,
    hottest: transportToHottest
  }
);
export type RootState = ReturnType<typeof reducers>

const store = createStore(reducers);

export default store;
