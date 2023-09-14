import { createSlice } from "@reduxjs/toolkit"

// Define constants for user types.
export const USER_TYPE = {
    PATIENT: 'PATIENT',
    THERAPIST: 'THERAPIST',
}

// Define the key used to store authentication data in localStorage.
const storeKey = 'auth'

// Define a function to get the raw authentication data from localStorage.
export const getInitialStateRaw = () => localStorage.getItem(storeKey)

// Define a default state structure.
const defaultState = {
    user: {
        email: '',
        id: '',
        last_name: '',
        first_name: '',
        city: '',
    },
    access_token: '',
    userType: ''
}

// Define a function to parse the raw authentication data or return default state.
export const parseOrDefaulf = (rawString = getInitialStateRaw()) => {
    if (!rawString) {
        return null
    }
    return /** @type {typeof defaultState} */ (JSON.parse(rawString))
}

// Initialize the state by parsing stored data or using the default state.
const initialState = parseOrDefaulf(getInitialStateRaw()) ?? defaultState

// Extract the keys from the initial state.
const stateKeys = Object.keys(initialState);

// Define a function to save authentication data to localStorage.
const saveAuth = (auth) => {
    localStorage.setItem('auth', JSON.stringify(auth));
    console.log('saveAuth.fired', { auth })
}

// Define a function to clear saved authentication data from localStorage.
const clearSavedAuth = () => {
    localStorage.removeItem('auth')
    console.log('clearSavedAuth.fired')
}

// Create a Redux slice to manage authentication state.
const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, /** @type {PayloadAction<typeof initialState>} */ action) => {
            // Update state properties with payload values.
            for (let key of stateKeys) {
                state[key] = action.payload[key]
            }
            // Save the updated authentication data to localStorage.
            saveAuth(state)
        },
        setToken: (state, /** @type {PayloadAction<typeof initialState['access_token']>} */ action) => {
            // Update the access_token property with the payload value.
            state.access_token = action.payload
            // Save the updated authentication data to localStorage.
            saveAuth(state)
        },
        setUserType: (state, /** @type {PayloadAction<typeof initialState['userType']>} */ action) => {
            // Update the userType property with the payload value.
            state.userType = action.payload
            // Save the updated authentication data to localStorage.
            saveAuth(state)
        },
        logout: (state) => {
            // Clear all authentication-related properties in state.
            for (const key of stateKeys) {
                state[key] = null;
            }
            // Clear saved authentication data from localStorage.
            clearSavedAuth()
        }
    }
})

// Export the reducer from the slice.
export default slice.reducer

// Export the action creators.
export const { setAuth, setToken, setUserType, logout } = slice.actions
