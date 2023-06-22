import { Layout } from 'antd'
import { FC, useEffect } from 'react'
import { AppRouter } from './components/AppRouter'
import { Navbar } from './components/Navbar'
import './App.css'
import { setIsAuth, setUser } from './store/reducers/auth'
import { IUser } from './models/IUser'
import { useDispatch } from 'react-redux'

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(setUser({ username: localStorage.getItem('username' || '') } as IUser));
      dispatch(setIsAuth(true));
    }
  }, [dispatch])

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}
