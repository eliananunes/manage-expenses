import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user',
    initialState:{
        name: '',
        email: '',
    },
    reducers: {
        getName(state, { payload }) {
           return { ...state, name: payload }
        },
        getEmail(state, { payload }) {
            return { ...state, email: payload }
        },
    }
});

export const { getName, getEmail } = slice.actions;

export const selectUser = state => state.user;

export default slice.reducer;