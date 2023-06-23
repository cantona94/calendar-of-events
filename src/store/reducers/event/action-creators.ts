import { IEvent } from "../../../models/IEvent";
import { AppDispatch } from "../../index";
import { setEvents, setGuests } from './index';
import UserService from "../../../api/UserService";

export const EventActionCreators = {
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers()
      dispatch(setGuests(response.data));
    } catch (e) {
      console.log(e);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || '[]'
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(setEvents(json));
      localStorage.setItem('events', JSON.stringify(json));
    } catch (e) {
      console.log(e)
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || '[]'
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
      dispatch(setEvents(currentUserEvents));
    } catch (e) {
      console.log(e)
    }
  }
}