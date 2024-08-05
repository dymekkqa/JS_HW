import { HomePage } from "../../pages/products/home.page.js";
import { ProductsPage } from "../../pages/products/products.page.js";


export class HomePageService{

    constructor(
        private homePage: HomePage = new HomePage(),
        private productsPage: ProductsPage = new ProductsPage()
    ){}

    async openProductsPage(){
        await this.homePage.clickOnButtonProductsFromMenu()
        await this.homePage.waitForSpinnerToHide()
        await this.productsPage.waitForOpened()
    }
}