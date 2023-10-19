import { createSlice } from "@reduxjs/toolkit";

export const openAllCatalog =  createSlice({
    name: "openAllCatalog",
    initialState: false,
    reducers:{
        OPEN_ALL_CART:(state , active) => {
            return state = !state
        }
    }
})

export const {OPEN_ALL_CART} = openAllCatalog.actions

export default openAllCatalog.reducer