import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './authSlice'

// Custom hook to access the entire Redux store.
export const useAppStore = () => {
    const store = useSelector((/** @type {import('./store').RootState} */ state) => state)
    return store
}

// Custom hook for handling authentication-related state.
export const useAuthHook = () => {
    const dispatch = useAppDispatch()
    // Get the 'auth' slice of the Redux store using the 'useAppStore' hook.
    const { auth } = useAppStore()

    // Check if the user is logged out based on the presence of 'access_token'.
    const isLoggedOut = ['', undefined, null].includes(auth.access_token)

    // Determine if the user is logged in based on the 'isLoggedOut' condition.
    const isLoggedIn = !isLoggedOut

    const logout = () => {
        dispatch(actions.logout())
    }

    // Return an object containing authentication data, actions, and login status.
    return { ...auth, actions, isLoggedIn, isLoggedOut, logout }
}

// Custom hook to access the Redux dispatch function.
/** @type {()=> import('@reduxjs/toolkit').Dispatch} */
export const useAppDispatch = useDispatch;
