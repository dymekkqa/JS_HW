import { DeleteModal } from "../../pages/products/delete.modal.js";



export class DeleteModalService{
    constructor(
        private deleteModal = new DeleteModal()
    ){}


    async submit(){
        await this.deleteModal.clickOnSubmitButton()
        await this.deleteModal.waitForSpinnerToHide()
    }
}