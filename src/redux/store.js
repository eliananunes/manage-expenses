import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import expensesReducer from './expenseSlice';

const store = configureStore({
  reducer:{
    user: userReducer,
    wallet: expensesReducer,
  }
});

export default store;