import { createAction } from "@reduxjs/toolkit";
import { Product } from "../../models/product";
import { actionTypes } from "./action.types";

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadproductsAction = createAction<Array<Product>>(
    actionTypes["product@load"]
);

export const addproductAction = createAction<Product>(
    actionTypes["product@add"]
);

export const updateproductAction = createAction<Product>(
    actionTypes["product@update"]
);

export const deleteproductAction = createAction<Product>(
    actionTypes["product@delete"]
);
