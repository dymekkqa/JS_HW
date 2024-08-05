import { SalesPortalPage } from "../salesPortal.page.js";
import { ProductDetails } from "../../../data/types/product.types.js";


export class ProductDetailsModal extends SalesPortalPage{
    readonly uniqueElement = 'div.modal-header'

    readonly 'Modal title' = (obj: string) => `//h5[@class='modal-title' and contains(text(), "${obj}'s Details")]`
    readonly 'Product detail' = (fieldName: string) => `//div/strong[@class='strong-details' and text()='${fieldName}:']/following-sibling::*`
    readonly 'Cancel Modal button' = `//button[.='Cancel']`    
    

    async getProductDetails() {
        const [name, amount, price, manufacturer, notes] = await Promise.all([
            this.getText(this['Product detail'](ProductDetails.NAME)),
            this.getText(this['Product detail'](ProductDetails.AMOUNT)),
            this.getText(this['Product detail'](ProductDetails.PRICE)),
            this.getText(this['Product detail'](ProductDetails.MANUFACTURER)),
            this.getText(this['Product detail'](ProductDetails.NOTES))
        ]);

        return {
            name,
            amount: Number(amount),
            price: Number(price),
            manufacturer,
            notes
        };
    }

    async clickOnCloseModalButton(){
        await this.click(this["Cancel Modal button"])
    }
}
