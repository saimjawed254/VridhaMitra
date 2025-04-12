import { createSlice } from '@reduxjs/toolkit'

const logSlice=createSlice({
    name:'logSelect',
    initialState:{log:"not-logged-in"},
    reducers:{
        logged : (state)=>{
            state.log="logged-in";
        },
        notLogged :(state)=>{
            state.log="not-logged-in";
        }
    }

})

export const logActions = logSlice.actions;

export default logSlice;