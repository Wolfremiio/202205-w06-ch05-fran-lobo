import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { productReducer } from "../reducers/products/product.reducer";

function render(
    ui: JSX.Element,
    {
        preloadedState,
        store = configureStore({
            reducer: { character: productReducer },
            preloadedState,
        }),
        ...renderOptions
    }: { preloadedState?: any; store?: any } = {}
) {
    function Wrapper({ children }: { children: JSX.Element }) {
        return <Provider store={store}>{children}</Provider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
//este archivo lo que hace es sobreescribir el método render, así se puede reusar esto para hacer más fáciles  los otros tests de renderizado
