import { configureStore, } from "@reduxjs/toolkit";
import data from "./app/data";


export const store = configureStore({
    reducer: {
        reducer: data,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})