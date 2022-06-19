import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./action.creators";

const initialState: number = 0;

export const cartIdReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.idIncrement, (state) => +1)

        .addDefaultCase((state) => state);
});
