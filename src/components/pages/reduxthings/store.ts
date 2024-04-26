import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"
import { usersApi } from './apiSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch