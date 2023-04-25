import { configureStore } from "@reduxjs/toolkit";
import  stateReducer  from './stateSlicer'

export const store = configureStore({
    reducer: {
        users:stateReducer 
    }
})

