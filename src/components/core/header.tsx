import { Menu } from "./menu";

import { aMenuItems } from "../../interfaces/menu-items";
import { Link } from "react-router-dom";

export function Header({ options }: { options: aMenuItems }) {
    const title = "ISDI-Coffee";
    return (
        <>
            <header className="header">
                <h1>{title}</h1>
                <Menu options={options}></Menu>
            </header>

            <Link to={`/cart`}>
                <button>Ver Carrito</button>
            </Link>
        </>
    );
}
