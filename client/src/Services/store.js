// Import the 'auth' reducer from the 'authSlice' module.
import auth from './authSlice'

// Import the 'configureStore' function from the '@reduxjs/toolkit' library.
import { configureStore } from '@reduxjs/toolkit'

// Create the Redux store by configuring it with the 'auth' reducer.
export const store = configureStore({
    reducer: {
        auth // This associates the 'auth' reducer with the 'auth' slice in the store.
    }
})

// Define TypeScript type aliases for better type inference.
// These JSDoc comments provide type information for the store's state and dispatch function.

/** @typedef {ReturnType<typeof store.getState>} RootState */
// The 'RootState' type represents the shape of the state in the Redux store.
// It uses 'ReturnType' to infer the type based on the 'getState' method of the store.

/** @typedef {ReturnType<typeof store.dispatch>} AppDispatch */
// The 'AppDispatch' type represents the type of the dispatch function in the Redux store.
// It uses 'ReturnType' to infer the type based on the 'dispatch' method of the store.
