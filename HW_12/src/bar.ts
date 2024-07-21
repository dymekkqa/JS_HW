import { Order } from './order';

export interface IBarOrder {
    order: Order;
    dataTime: string;
    orderId: number;
}

export class Bar {
    private name: string;
    private address: string;
    private orders: IBarOrder[];
    private workingHours: string;       
    private orderId: number;
  
    constructor() {
        this.name = "1863";
        this.address = "Miensk, ul.Kalinouskaha 1";
        this.orders = [];
        this.workingHours = '8-20';        
        this.orderId = 1;
    }

    addOrder(order: Order): void {
        const obj: IBarOrder = {
            order: order,
            dataTime: new Date().toISOString(),
            orderId: this.orderId++
        };
        
        this.orders.push(obj);
    }

    removeOrderById(id: number): void {
        const index = this.orders.findIndex(order => order.orderId === id);
        if (index !== -1) {
            this.orders.splice(index, 1);
        } else {
            console.error(`Order with ID ${id} not found.`);
        }
    }    
    

    getTotalRevenue(): number {        
        return this.orders.reduce((sum, order) => sum + order.order.getTotalPrice(), 0)
    }
        
    

    getAllOrders(): IBarOrder[] {
        return this.orders;
    }
    

    getInfoAboutBar(): string {
        return `Welcome to ${this.name} bar on ${this.address} in Belarus. We glad to see u every day on ${this.workingHours} o'clocks. Thank u fo ur order!`;
    }
}
