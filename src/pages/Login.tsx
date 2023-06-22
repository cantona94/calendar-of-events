import { Card, Layout, Row } from 'antd'
import { FC } from 'react'
import { LoginForm } from '../components/LoginForm'

export const Login: FC = () => {
  return (
    <Layout >
      <Row className="LoginForm" justify="center" align="middle">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  )
}
