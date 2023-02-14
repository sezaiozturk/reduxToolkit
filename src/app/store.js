import { configureStore } from "@reduxjs/toolkit";
const counterReducer = require('../feature/counter/counterSlice');

export const store=configureStore({
    reducer:{
        counter:counterReducer,
    }
})