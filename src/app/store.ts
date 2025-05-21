import { configureStore } from '@reduxjs/toolkit';
import testimonialReducer from '../features/data/testimonialSlice';

export const store = configureStore({
  reducer: {
    data: testimonialReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;