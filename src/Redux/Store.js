// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import CartItemReducer  from './Slice';

export default configureStore({
  reducer: {
    CartItemCount:CartItemReducer
    
  },
});
