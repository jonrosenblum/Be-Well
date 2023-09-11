import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './authSlice'

export const useAppStore = () => {
    const store = useSelector((/** @type {import('./store').RootState} */ state) => state)
    return store
}

export const useAuthHook = () => {
    const { auth } = useAppStore()

    return { ...auth, actions }
}

/** @type {()=> import('@reduxjs/toolkit').Dispatch} */
export const useAppDispatch = useDispatch;