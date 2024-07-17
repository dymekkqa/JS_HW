export abstract class Meal {
    name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    abstract calculatePrice(): number;
}