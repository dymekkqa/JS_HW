import { SalesPortalPage } from "../salesPortal.page.js";


export class DeleteModal extends SalesPortalPage{

    readonly uniqueElement = 'div.modal-header'
    readonly 'Submite button' = '.btn-danger'

    async clickOnSubmitButton(){
        await this.click(this["Submite button"])
    }


}