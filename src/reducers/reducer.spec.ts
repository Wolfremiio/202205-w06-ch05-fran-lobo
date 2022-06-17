import { categories, Product, sizes } from "../models/product";
import { productReducer } from "./product.reducer";
import * as actions from "./action.creators";

describe("Given the productReducer", () => {
    const mockProduct = {
        id: 1,
        promo: false,
        price: 10,
        size: sizes.M,
        origin: "Colombia",
        image: "image.png",
        description: "De la hoja a tu casa ",
        category: categories.coffee,
    };

    describe("When use the loadProducts function", () => {
        test("Should  load the mockProduct array", () => {});
        const initialState: Array<Product> = [];

        const newState = productReducer(
            initialState,
            actions.loadproductsAction([mockProduct])
        );
        expect(newState).toHaveLength(1);
        expect(newState).toStrictEqual([mockProduct]);
    });
});
