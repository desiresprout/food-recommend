import { combineReducers } from "@reduxjs/toolkit";
import food from "@reducers/food";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  food: food.reducer,
});

export default rootReducer;
