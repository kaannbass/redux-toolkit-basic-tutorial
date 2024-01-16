import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number
};

const initialState = { value: 0 } as CounterState;

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++;
            console.log(state.value);
        },
        amountAdded(state, actions: PayloadAction<number>) {
            state.value += actions.payload;
        }
    }
})

export const { increment, amountAdded } = counterSlice.actions;
export default counterSlice;