import { Beer } from './beer';
import { Order } from './order';
import { Bar } from './bar';
import { Burger } from './burgers';
import { beerBrand, beerValue, burgersTypeOfMeet, cheeseTypeOfBurgers, Sauce } from './enums';


const beer1 = new Beer("Krynica Liter", beerValue.liter, beerBrand.krynica);
const burger1 = new Burger('Burger', burgersTypeOfMeet.beef, cheeseTypeOfBurgers.cheddar, Sauce.Ketchup);
const order = new Order('Ewa Beyga')
const order2 = new Order('Dzmitry Krapiunitski')
order.addItem(beer1);
order.addItem(burger1)
order2.addItem(beer1);
order2.addItem(burger1)
const bar = new Bar();
bar.addOrder(order)
bar.addOrder(order2)
// bar.removeOrderById(1)
console.log(bar.getTotalRevenue())
console.log(bar.getAllOrders())

