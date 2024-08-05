import { SalesPortalPage } from "../salesPortal.page.js";

export class Alerts extends SalesPortalPage{
    uniqueElement=  '.toast-body'
    private 'Close alert button' = '//button[@aria-label="Close"]'

    async getAlertText(){
        return await this.getText(this.uniqueElement)
    }

    async clickOnCloseAlertButton(){
        await this.click(this["Close alert button"])
    }

}