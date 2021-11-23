import { createStore } from 'redux'
import rootReducer from "./reducers";

export const store = createStore(rootReducer);


export default store;

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
