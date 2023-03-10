import { createSlice } from "@reduxjs/toolkit";

const athSlise =createSlice({
    name:"athSlice",
    initialState:{ isLogged:false,name:"Amr Mohmed"},
    reducers:{
        logInOut:(state)=>{
            state.isLogged =!state.isLogged;
        }
    }
})
export const {logInOut}=athSlise.actions;
export default athSlise.reducer;