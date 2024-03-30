import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Slices/TodoSlice';

// Since we are using Reduxtoolkit its better to use configureStore function because we may have multiple slices
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
