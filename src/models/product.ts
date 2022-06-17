export class Product {
    static generateId(): number {
        return Math.ceil(Math.random() * 100_000);
    }
    id: number;
    promo: boolean;

    constructor(
        public price: number,
        public size: string,
        public origin: string,
        public image: string,
        public description: string,
        public category: string
    ) {
        this.id = Product.generateId();
        this.promo = false;
    }
}
