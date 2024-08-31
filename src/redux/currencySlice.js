import { createSlice } from '@reduxjs/toolkit';

export const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        rate: null,
        targetCurrency: 'EUR',
    },
    reducers: {
        setRate: (state, action) => {
            state.rate = action.payload.rate;
        },
        setTargetCurrency: (state, action) => {
            state.targetCurrency = action.payload.targetCurrency;
        },
    },
});

export const { setRate, setTargetCurrency } = currencySlice.actions;

export default currencySlice.reducer;
