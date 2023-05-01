import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import { dogsApiSlice } from "./features/dogs-api-slice";
import todoSlice from "./features/TodoSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoSlice,
        [dogsApiSlice.reducerPath]: dogsApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dogsApiSlice.middleware),
})

export default store

