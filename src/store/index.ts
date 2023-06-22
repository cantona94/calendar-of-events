import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers/auth';

export const store = configureStore({
  reducer: {
    auth: reducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
