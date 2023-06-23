import { FC, useState } from 'react'
import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { Dayjs } from 'dayjs'
import { IUser } from '../models/IUser'
import { IEvent } from '../models/IEvent'
import { rules } from '../utils/rules'
import { formatDate } from '../utils/date'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface EventFormProps {
  guests: IUser[],
  submit: (event: IEvent) => void,
}

export const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  } as IEvent);

  const { user } = useTypedSelector(state => state.auth)

  const selectDate = (date: Dayjs | null) => {
    if (date)
      setEvent({ ...event, date: formatDate(date?.toDate()) });
  }

  const submitForm = () => {
    submit({ ...event, author: user.username });
  }

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          onChange={e => setEvent({ ...event, description: e.target.value })}
          value={event.description}
        />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="date"
        rules={[rules.required(), rules.isDateAfter("Нельзя создать событие в прошлом!")]}
      >
        <DatePicker
          onChange={(date) => selectDate(date)}
        />
      </Form.Item>
      <Form.Item
        label="Выберите гостя"
        name="guest"
        rules={[rules.required()]}
      >
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {guests.map(guest =>
            <Select.Option
              key={guest.username}
              value={guest.username}
            >
              {guest.username}
            </Select.Option>
          )}
        </Select>

      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}