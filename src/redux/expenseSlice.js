import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'expenses',
    initialState:{
        expenses: [],
        currencies: [],
    },
    reducers: {
        getExpenses(state, { payload }) {
           return { ...state, expenses: payload }
        },
        setCurrenciesInfo(state, { payload }) {
            return { ...state, currencies: payload }
        },
    }
});

export const { getExpenses, setCurrenciesInfo } = slice.actions;

export const selectWallet = state => state.expenses;

export default slice.reducer;

export function fetchAPI() {
    return async function (dispatch) {
        const response = await fetch('https://economia.awesomeapi.com.br/json/all');
        const currenciesData = await response.json();
        dispatch(setCurrenciesInfo(currenciesData));
    }
}