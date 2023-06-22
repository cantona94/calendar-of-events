import { createSlice } from '@reduxjs/toolkit';
import { AuthState, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types"
import { IUser } from '../../../models/IUser';

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, action: SetAuthAction) {
      state.isAuth = action.payload;
      state.isLoading = false;
    },
    setUser(state, action: SetUserAction) {
      state.user = action.payload;
    },
    setIsLoading(state, action: SetIsLoadingAction) {
      state.isLoading = action.payload;
    },
    setError(state, action: SetErrorAction) {
      state.error = action.payload;
      state.isLoading = false
    }
  }
})

export const { setIsAuth, setUser, setIsLoading, setError } = authSlice.actions;

export default authSlice.reducer;