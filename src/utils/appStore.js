import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import User from '../components/User';
import { useReducer } from 'react';


const appStore = configureStore(
    {
        reducer:{
            //Configuring our slice here 
            cart : cartReducer,
            //  user:userReducer --> we can add more slices here
        }
    }
);

export default appStore