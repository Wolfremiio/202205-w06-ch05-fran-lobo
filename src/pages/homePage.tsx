import { useSelector } from "react-redux";
import { List } from "../components/list";
import { iState } from "../store/store";

export default function HomePage() {
    const products = useSelector((state: iState) => state.products).filter(
        (product) => product.promo === true
    );

    return (
        <>
            <h1>Ofertas de la Semana </h1>

            <List products={products} />
        </>
    );
}
