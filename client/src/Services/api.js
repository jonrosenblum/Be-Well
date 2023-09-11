import { parseOrDefaulf } from "./authSlice"

const getAccessToken = () => parseOrDefaulf()?.access_token

const authHeader = () => ({ Authorization: `Bearer ${getAccessToken()}` })


const request = (url, data, options = {}) => {
  return fetch(url, {
    ...(options),
    data,
    headers: { ...(options?.headers ?? {}), ...(authHeader()) }
  })
}

export const api = {
  getPatients: () => request('/therapist/patients').then(res => /** @type {import("./authSlice").User} */ (res.json())),
}
