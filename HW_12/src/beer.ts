import { Meal } from "./meel";
import { beerValue, beerBrand} from "./enums"

export interface IBeer {
    beerValue: beerValue;
    beerBrand: beerBrand;
    // calculatePrice(): number;
}

export class Beer extends Meal implements IBeer {
    beerValue: beerValue;
    beerBrand: beerBrand;

    constructor(name: string, beerValue: beerValue, beerBrand: beerBrand) {
        super(name, 0);
        this.beerValue = beerValue;
        this.beerBrand = beerBrand;
        this.price = this.calculatePrice();
    }

    calculatePrice(): number {
        return this.beerValue * this.beerBrand;
    }
}