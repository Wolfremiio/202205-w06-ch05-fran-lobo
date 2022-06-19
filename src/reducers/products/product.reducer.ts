// Funcion pura
// recibe un estado y una accion
// retorna un NUEVO estado (NO HAY MUTACION)

import { createReducer } from "@reduxjs/toolkit";
import { Product } from "../../models/product";

import * as actions from "./action.creators";

const initialState: Array<Product> = [];
export const productReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(actions.loadproductsAction, (state, action) => [
            ...action.payload,
        ])
        .addCase(actions.addproductAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(actions.updateproductAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(actions.deleteproductAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )

        .addDefaultCase((state) => state);
});
