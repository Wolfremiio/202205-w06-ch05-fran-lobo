import { Link } from "react-router-dom";
import { Product } from "../../models/product";
import styles from "./index.module.css";

export function Card({ product }: { product: Product }) {
    return (
        <div className={styles.card}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            <Link to={`/details/${product.id}`}>
                <img
                    className="card-image"
                    src={product.image}
                    alt={product.name}
                />
            </Link>
        </div>
    );
}
