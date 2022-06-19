import { createAction } from "@reduxjs/toolkit";
import { cartProduct} from "../../models/cartProduct"
import { actionTypes } from "../products/action.types";

export interface iAction{
   type: actionTypes;
   payload?: any
}

export const loadProductsAction = createAction<Array<cartProduct>>(
   actionTypes['cart@load'];
);

export const addproductAction = createAction<cartProduct>(
    actionTypes['cart@add'];
)

export const updateproductAction = createAction<
cartProduct>(
    actionTypes['cart@update'];
)

export const deleteproductAction = createAction<cartProduct>(
    actionTypes['cart@delete'];
)