// Funcion pura
// recibe un estado y una accion
// retorna un NUEVO estado (NO HAY MUTACION)

import { createReducer } from "@reduxjs/toolkit";
import { Product } from "../models/product";

import * as ac from "./action.creators";

const initialState: Array<Product> = [];
export const characterReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadproductsAction, (state, action) => [...action.payload])
        .addCase(ac.addproductAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(ac.updateproductAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(ac.deleteproductAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )

        .addDefaultCase((state) => state);
});
