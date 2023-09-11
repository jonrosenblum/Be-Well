import auth from './authSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        auth
    }
})

/** @typedef {ReturnType<typeof store.getState>} RootState */
/** @typedef {ReturnType<typeof store.dispatch>} AppDispatch */
