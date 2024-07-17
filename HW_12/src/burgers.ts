import { Meal } from "./meel";
import { burgersTypeOfMeet, cheeseTypeOfBurgers, Sauce } from './enums';

export class Burger extends Meal {
    burgersTypeOfMeet: burgersTypeOfMeet;
    cheeseTypeOfBurgers: cheeseTypeOfBurgers;
    sauce?: Sauce;

    constructor(name: string, burgersTypeOfMeet: burgersTypeOfMeet, cheeseTypeOfBurgers: cheeseTypeOfBurgers, sauce?: Sauce) {
        super(name, 0);
        this.burgersTypeOfMeet = burgersTypeOfMeet;
        this.cheeseTypeOfBurgers = cheeseTypeOfBurgers;
        if (sauce !== undefined){
            this.sauce = sauce
        }
        this.price = this.calculatePrice();
    }

    calculatePrice(): number {
        let result =  this.burgersTypeOfMeet + this.cheeseTypeOfBurgers
        if (this.sauce !== undefined){
            result += this.sauce
        }  
        return result
    }
}
