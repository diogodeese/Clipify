import { createSlice } from '@reduxjs/toolkit'
import { AuthType } from './authType'

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload
      state.user = user
      state.token = token
    },
    logOut: (state) => {
      state.user = null
      state.token = null
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: AuthType) => state.auth.user
export const selectCurrentToken = (state: AuthType) => state.auth.token
