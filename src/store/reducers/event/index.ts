import { createSlice } from '@reduxjs/toolkit';
import { SetGuestsAction, SetEventsAction, EventState } from "./types";

const initialState: EventState = {
  events: [],
  guests: [],
}

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvents(state, action: SetEventsAction) {
      state.events = action.payload;
    },
    setGuests(state, action: SetGuestsAction) {
      state.guests = action.payload;
    }
  }
})

export const { setEvents, setGuests } = eventSlice.actions;

export default eventSlice.reducer;