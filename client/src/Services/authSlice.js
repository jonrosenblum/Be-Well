import { createSlice } from "@reduxjs/toolkit"

export const USER_TYPE = /**@type const */ ({
    PATIENT: 'PATIENT',
    THERAPIST: 'THERAPIST',
})

const storeKey = 'auth'

const initialStateRaw = localStorage.getItem(storeKey)

const defaultState = {
    user: ({
        email: '',
        id: '',

    }),
    access_token: '',
    userType: ''
}

const parseOrDefaulf = (rawString) => {
    if (!rawString) {
        return null
    }
    return /** @type {typeof defaultState} */ (JSON.parse(rawString))
}

const initialState = parseOrDefaulf(initialStateRaw) ?? defaultState

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

