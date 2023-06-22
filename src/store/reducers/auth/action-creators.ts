import { IUser } from "../../../models/IUser";
import { setIsAuth, setUser, setError, setIsLoading } from './index';
import { AppDispatch } from "../../index";
import UserService from "../../../api/UserService";

export const getUser = (username: string, password: string) => (
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      setTimeout(async () => {
        const response = await UserService.getUsers()
        const user = response.data.find(user => user.username === username && user.password === password);
        if (user) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', user.username);
          dispatch(setUser(user));
          dispatch(setIsAuth(true))
        } else {
          dispatch(setError('Некорректный логин или пароль'));
        }
        dispatch(setIsLoading(false));
      }, 1000)
    } catch (e) {
      dispatch(setError('Произошла ошибка при логине'))
    }
  });

export const logout = () => async (dispatch: AppDispatch) => {
  localStorage.removeItem('auth')
  localStorage.removeItem('username')
  dispatch(setUser({} as IUser));
  dispatch(setIsAuth(false))
}