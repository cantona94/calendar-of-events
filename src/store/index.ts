import { configureStore } from '@reduxjs/toolkit'
import authReducers from './reducers/auth';
import eventReducers from './reducers/event';

export const store = configureStore({
  reducer: {
    auth: authReducers,
    event: eventReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 