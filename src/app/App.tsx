import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Layout } from "../components/core/layout";
import { aMenuItems } from "../interfaces/menu-items";
import * as React from "react";

// import { GotContextProvider } from './context/got-provider';
// import { TodoContextProvider } from './context/todo-provider';

function App() {
    const HomePage = React.lazy(() => import("../pages/homePage"));
    const CoffeePage = React.lazy(() => import("../pages/coffeePage"));
    // const GotPage = React.lazy(() => import('./pages/got'));
    // const FormPage = React.lazy(() => import('./pages/form'));
    // const TodoPage = React.lazy(() => import('./pages/todo.context'));

    const options: aMenuItems = [
        { path: "", label: "Home - Ofertas", page: <HomePage /> },
        { path: "coffee", label: "Cafés", page: <CoffeePage /> },
        { path: "*", label: "", page: <Navigate replace to="" /> },
    ];

    console.log(options);
    return (
        <Router>
            <Layout options={options}>
                <React.Suspense>
                    <Routes>
                        {options.map((item) => (
                            <Route
                                key={item.label}
                                path={item.path}
                                element={item.page}
                            ></Route>
                        ))}
                    </Routes>
                </React.Suspense>
            </Layout>
        </Router>
    );
}

export default App;
