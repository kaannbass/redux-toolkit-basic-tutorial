import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counter-slice";
import { apiSlice } from "../features/dogs/dogs-api-slice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddeware) => {
        return getDefaultMiddeware().concat(apiSlice.middleware);
    }
})

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>