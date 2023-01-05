import { createSlice } from "@reduxjs/toolkit"
import { registerUser, userLogin } from "./authAction"
const initialData = localStorage.getItem("login") ? JSON.parse(localStorage.getItem("login")) : null
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: initialData
  },
  reducers: {
    logoutAction: (state) => {
      localStorage.removeItem("login")
      state.login = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, (state, { payload }) => {
        state.loading = true
      })
      
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false
        state.login = payload

      })
      
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false
        state.RegisterError = payload
      })


      .addCase(userLogin.pending, (state, { payload }) => {
        state.loading = true
      })


      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false
        state.login = payload
        // state.login = {
        //   name: payload.name,
        //   email: payload.email,
        //   token: payload.token
        // }
      })

      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false
        state.RegisterError = payload
      })
  }
})

export default authSlice.reducer
export const { logoutAction } = authSlice.actions