import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

export interface EventState {
  guests: IUser[];
  events: IEvent[];
}

export interface SetGuestsAction {
  payload: IUser[]
}

export interface SetEventsAction {
  payload: IEvent[]
}