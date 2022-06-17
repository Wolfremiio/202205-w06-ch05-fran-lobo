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

    describe("When use the addProducts function", () => {
        test("Should  load the mockProduct array", () => {});
        const initialState: Array<Product> = [mockProduct];
        const newProduct = {
            ...mockProduct,
            id: 2,
            promo: true,
            category: categories.coffee,
        };
        const newState = productReducer(
            initialState,
            actions.addproductAction(newProduct)
        );
        expect(newState).toHaveLength(2);
        expect(newState).toStrictEqual([mockProduct, newProduct]);
    });

    describe("When use the updateProducts function", () => {
        test("Should  update the mockProduct array", () => {
            const initialState: Array<Product> = [mockProduct];
            const updateMockProduct = {
                ...mockProduct,
                price: 12,
                promo: true,
            };
            const newState = productReducer(
                initialState,
                actions.updateproductAction(updateMockProduct)
            );
            expect(newState).toHaveLength(1);
            expect(newState).toStrictEqual([updateMockProduct]);
        });
    });

    describe("When we use the deleteProduct function", () => {
        test("Then it should delete the mockProduct", () => {
            const initialState: Array<Product> = [mockProduct];
            const newState = productReducer(
                initialState,
                actions.deleteproductAction(mockProduct)
            );

            expect(newState).toHaveLength(0);
            expect(newState).toStrictEqual([]);
        });
    });
});
