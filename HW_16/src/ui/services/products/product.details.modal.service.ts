
import { ProductDetailsModal } from "../../pages/products/product.details.modal.js";
import { ProductsPage } from "../../pages/products/products.page.js";

export class ProductDetailsModalService{

    constructor(
        private modalPage: ProductDetailsModal = new ProductDetailsModal(),
        private products: ProductsPage = new ProductsPage()
    ){}

    async getProductDetails(){
        return await this.modalPage.getProductDetails()
    }

    async closeModal(){
        await this.modalPage.clickOnCloseModalButton()
        await this.modalPage.waitForSpinnerToHide()
        await this.products.waitForOpened()
    }
}