import { Layout, Row, Menu } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector(state => state.auth);

  const menuLoginItems = [
    {
      key: '1',
      onClick: () => navigate(RouteNames.LOGIN),
      label: 'Регистрация',
    }
  ]

  const menuEventItems = [
    {
      key: '1',
      label: 'User',
    },
    {
      key: '2',
      onClick: () => console.log('выход'),
      label: 'Выход',
    }
  ]

  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth
          ?
          <Menu theme='dark' mode="horizontal" selectable={false} items={menuEventItems} />
          :
          <Menu theme='dark' mode="horizontal" selectable={false} items={menuLoginItems} />
        }
      </Row>
    </Layout.Header>
  )
}
