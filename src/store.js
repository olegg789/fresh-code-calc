import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./js/reducers/mainReducer";
import {valueReducer} from "./js/reducers/valueReducer";

export const store = configureStore({
    reducer: {
        main: mainReducer,
        value: valueReducer,
    },
});