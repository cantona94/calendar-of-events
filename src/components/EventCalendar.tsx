import { FC } from 'react'
import { Calendar } from "antd"
import { Dayjs } from 'dayjs'
import { IEvent } from '../models/IEvent'
import { formatDate } from '../utils/date';

interface EventCalendarProps {
  events: IEvent[];
}

export const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Dayjs) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter(ev => ev.date === formatedDate);
    return (
      <div>
        {currentDayEvents.map((ev, index) =>
          <div key={index}>{ev.description}</div>
        )}
      </div>
    );
  };

  return (
    <Calendar
      cellRender={dateCellRender}
    />
  )
}