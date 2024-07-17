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
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].orderId === id) {              
              this.orders.splice(i, 1); 
              break; 
            }
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
