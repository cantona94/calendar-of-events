import { IUser } from "../../../models/IUser";

export interface AuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export interface SetAuthAction {
  payload: boolean;
}
export interface SetUserAction {
  payload: IUser;
}
export interface SetErrorAction {
  payload: string;
}
export interface SetIsLoadingAction {
  payload: boolean;
}
