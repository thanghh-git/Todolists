import { combineReducers } from "redux";
import newtaskReducer from "./newtask.reducer";

const rootReducer = combineReducers({
    newtaskReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;