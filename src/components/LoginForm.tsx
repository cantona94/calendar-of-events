import { Button, Form, Input } from 'antd'
import { FC, useState } from 'react'
import { rules } from '../utils/rules'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

export const LoginForm: FC = () => {
  const { error, isLoading } = useTypedSelector(state => state.auth);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { getUser } = useActions()

  const submit = () => {
    getUser(userName, password)
  }

  return (
    <Form
      onFinish={submit}
    >
      {error &&
        <div style={{ color: 'red' }}>
          {error}
        </div>
      }
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Пожалуйста, введите имя пользователя!')]}
      >
        <Input
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Пожалуйста, введите пароль!')]}
      >
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type={"password"}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}
