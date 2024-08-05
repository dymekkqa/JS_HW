import { SigninPage } from "../../pages/products/sign.in.page.js";
import { IUserCredentials } from '../../../data/types/sign.in.type.js';
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "../../../config/enviroment.js";
import { HomePage } from "../../pages/products/home.page.js";

export class SigninService {   

    constructor(
        private signinPage: SigninPage = new SigninPage(),
        private homePage: HomePage = new HomePage()
    ) {}
    
    async login(credentials: IUserCredentials) {
        await this.signinPage.fillCredential(credentials);
        await this.signinPage.clickOnLoginButton();
        await this.signinPage.waitForSpinnerToHide();
        await this.homePage.waitForOpened()
    }

    async loginAsAdmin() {
        const adminCredentials: IUserCredentials = {
            username: ADMIN_USERNAME,
            password: ADMIN_PASSWORD
        };
        await this.login(adminCredentials);
    }

    async singOut(){
        await this.signinPage.deleteCoockies(['Authorization'])
    }
}
