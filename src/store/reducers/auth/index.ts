import { createSlice } from '@reduxjs/toolkit';
import { AuthAction, AuthState } from "./types"

const initialState: AuthState = {
  isAuth: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: AuthAction) {
      state.isAuth = !action.payload
    }
  }
})

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;