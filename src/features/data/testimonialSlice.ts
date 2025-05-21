import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Testimonial } from '../../types/types';

interface DataState {
  items: Testimonial[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: DataState = {
  items: [],
  status: 'idle',
};

export const fetchTestimonials = createAsyncThunk<Testimonial[]>(
  'data/fetchData',
  async () => {
    const response = await fetch('mockTestimonials.json');
    return (await response.json()) as Testimonial[];
  }
);

const testimonialSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default testimonialSlice.reducer;
