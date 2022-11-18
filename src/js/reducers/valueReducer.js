import { createSlice } from "@reduxjs/toolkit";

export const valueReducer = createSlice({
    name: "value",
    initialState: {
        value: {
            value: "",
            screen: {value: "", arr: []}
        }
    },
    reducers: {
        set: (state, action) => {
            state[action.payload.key] = action.payload.value;
        },
    },
});

export const { set } = valueReducer.actions;
export default valueReducer.reducer;