import { Alerts } from "../../pages/products/allerts.js";


export class AlertService {
    constructor(
        private alert: Alerts = new Alerts()
    ){}

    async getAlertText(){        
        return await this.alert.getAlertText()        
    }

    async closeAlert(){
        await this.alert.clickOnCloseAlertButton()
    }

    async checkAlertText(text:string){
        expect(await this.getAlertText()).toBe(text)
    }
}