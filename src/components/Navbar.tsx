import { Layout, Row, Menu } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth
          ? <>
            <div style={{ color: 'white' }}>Vova</div>
            <Menu theme='dark' mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log('выход')} key={1} >Выйти</Menu.Item>
            </Menu>
          </>
          :
          <Menu theme='dark' mode="vertical" selectable={false}>
            <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>Регистрация</Menu.Item>
          </Menu>
        }
      </Row>
    </Layout.Header>
  )
}
