import { FC, useState, useEffect } from 'react'
import { Button, Layout, Modal, Row } from 'antd'
import { EventCalendar } from '../components/EventCalendar'
import { EventForm } from '../components/EventForm'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'

export const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector(state => state.event);
  const { user } = useTypedSelector(state => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, [])

  const addNewEvent = (event: IEvent) => {
    createEvent(event);
    setModalVisible(false);
  }

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button
          onClick={() => setModalVisible(true)}
        >
          Добавить событие
        </Button>
        <Modal
          title="Добавить событие"
          open={modalVisible}
          footer={null}
          onCancel={() => setModalVisible(false)}
        >
          <EventForm
            guests={guests}
            submit={addNewEvent}
          />
        </Modal>
      </Row>
    </Layout>
  )
}
