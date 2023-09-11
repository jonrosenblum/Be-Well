import { createSlice } from "@reduxjs/toolkit"

export const USER_TYPE = /**@type const */ ({
    PATIENT: 'PATIENT',
    THERAPIST: 'THERAPIST',
})

const storeKey = 'auth'

export const getInitialStateRaw = () => localStorage.getItem(storeKey)

const defaultState = {
    user: ({
        email: '',
        id: '',

    }),
    access_token: '',
    userType: ''
}

export const parseOrDefaulf = (rawString = getInitialStateRaw()) => {
    if (!rawString) {
        return null
    }
    return /** @type {typeof defaultState} */ (JSON.parse(rawString))
}


const initialState = parseOrDefaulf(getInitialStateRaw()) ?? defaultState

const stateKeys = Object.keys(initialState);

const saveAuth = (auth) => {



    localStorage.setItem('auth', JSON.stringify(auth));


    console.log('saveAuth.fired', { auth })
}

const clearSavedAuth = (auth) => {
    localStorage.removeItem("jwt-token");
    localStorage.removeItem('auth')
    console.log('clearSavedAuth.fired', { auth })
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, /** @type {PayloadAction<typeof initialState>} */ action) => {

            for (let key of stateKeys) {
                state[key] = action.payload[key]
            }
            saveAuth(state)
        },
        setToken: (state, /** @type {PayloadAction<typeof initialState['token']>} */ action) => {
            state.token = action.payload
            saveAuth(state)
        },
        setUserType: (state, /** @type {PayloadAction<typeof initialState['userType']>} */ action) => {
            state.userType = action.payload
            saveAuth(state)
        },
        logout: (state) => {
            for (const key of stateKeys) {
                state[key] = null;
            }
            clearSavedAuth(state)
        }

    }
})


export default slice.reducer

export const { setAuth, setToken, setUserType, logout } = slice.actions

/**
 * Represents a user in the database.
 * @typedef {Object} User
 * @property {number} id - The unique identifier for the user.
 * @property {string} password - The user's password (hashed or encrypted).
 * @property {string} first_name - The user's first name.
 * @property {string} last_name - The user's last name.
 * @property {string} email - The user's email address (unique).
 * @property {string} city - The city where the user resides.
 * @property {string} state - The state (2-letter abbreviation) where the user resides.
 * @property {string} phone_number - The user's phone number.
 * @property {number} therapist_id - The identifier of the therapist associated with the user.
 */

