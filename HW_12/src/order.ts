import { Meal } from "./meel";

export class Order {
    customerName: string;
    orderItems: Meal[];
    private totalPrice: number;
    // orderId?: number;
    

    constructor(customerName: string, orderItems: Meal[] = []) {
        this.customerName = customerName;
        this.orderItems = orderItems;
        this.totalPrice = this.calculateTotalPrice();
    }

    addItem(item: Meal): void {
        this.orderItems.push(item);
        this.totalPrice = this.calculateTotalPrice();
    }

    getTotalPrice(): number {
        return this.totalPrice;
    }

    private calculateTotalPrice(): number {
        return this.orderItems.reduce((total, item) => total + item.calculatePrice(), 0);
    }
}
