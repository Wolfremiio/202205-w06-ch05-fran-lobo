import { Product } from "../../models/product";

import { Card } from "../card";

export function List({ products }: { products: Product[] }) {
    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Card product={product} />
                    </li>
                ))}
            </ul>
        </>
    );
}
