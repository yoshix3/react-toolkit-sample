import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';

// stateの型を定義
export interface CounterState {
  value: number;
  isLoading: boolean;
  status: 'idle' | 'loading' | 'failed';
}

// stateの初期値
const initialState: CounterState = {
  value: 0,
  status: 'idle',
  isLoading: false,
};

// 非同期処理を呼び出す関数
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // 返却値は`fulfilled` の action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // reducerを記述する
  reducers: {},
  // 非同期処理はextraReducersに記述する
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
        state.isLoading = false;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
        state.isLoading = false;
      });
  },
});

export const selectCount = (state: RootState) => state.counter.value;
export const isLoading = (state: RootState) => state.counter.isLoading;

export default counterSlice.reducer;
