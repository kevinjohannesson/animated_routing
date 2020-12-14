import { combineReducers, configureStore, createSlice,  } from "@reduxjs/toolkit";
import { layoutSlice } from "./layout";
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { createBrowserHistory } from 'history'

// import { Reducer } from 'redux';
// import { LOCATION_CHANGE } from 'connected-react-router';
// type Mutation = "INCREMENT" | "DECREMENT";

// const increment = createAction<number, Mutation>("INCREMENT");
// const decrement = createAction<number, Mutation>("DECREMENT");


const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})




// const routerSlice = createSlice({
//   name: 'routerActions',
//   initialState: {
//     currentLocation: '',
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(LOCATION_CHANGE, (state, action) => {
//         console.log(LOCATION_CHANGE)
//         // console.log(state.currentLocation);
//         // console.log((action as any).payload)
//         state.currentLocation = 'foo'
//         // action is inferred correctly here if using TS
//       })
//       // // You can chain calls, or have separate `builder.addCase()` lines each time
//       // .addCase(decrement, (state, action) => {})
//       // // You can match a range of action types
//       // .addMatcher(
//       //   isRejectedAction,
//       //   // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
//       //   (state, action) => {}
//       // )
//       // // and provide a default case if no other handlers matched
//       // .addDefaultCase((state, action) => {})
//   },
// })

export const { incremented, decremented } = counterSlice.actions;

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  layout: layoutSlice.reducer,
  router: connectRouter(history),
  // router2: routerSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    routerMiddleware(history),
  ]
})

export type RootState = ReturnType<typeof rootReducer>

export default store;

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>()
// export const useAppSelector = () => useSelector<AppDispatch>()

// const counter = createReducer(
//   0,
//   (builder) =>
//     builder
//       .addCase(increment, (state, action) => {
//         // action is inferred correctly here
//         console.log(action.type)
//       })
// );

// const store = configureStore({
//   reducer: counter,
// });

// document.getElementById('increment').addEventListener('click', () => {
//   store.dispatch(increment())
// })
