import { createReducer } from "@reduxjs/toolkit";
import { cartProduct } from "../../models/cartProduct";
import * as ac from "./action.creators";

const initialState: Array<cartProduct> = [];
export const cartReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadProductsAction, (state, action) => [...action.payload])
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
            state.filter((item) => item.cartId !== action.payload.cartId)
        )
        .addDefaultCase((state) => state);
});
