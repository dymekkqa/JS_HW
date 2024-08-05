import { SalesPortalPage } from '../salesPortal.page.js';
import { IUserCredentials } from '../../../data/types/sign.in.type.js';
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "../../../config/enviroment.js";

export class SigninPage extends SalesPortalPage {
    uniqueElement = '.btn-primary';
    private readonly 'Email input' = '#emailinput';    
    private readonly 'Password input' = 'input[type="password"]';
    private readonly 'Login button' = '.btn-primary';

    async fillCredential(credentials?: IUserCredentials) {
        await this.setValue(this['Email input'], credentials?.username ?? ADMIN_USERNAME);
        await this.setValue(this['Password input'], credentials?.password ?? ADMIN_PASSWORD);
    }

    async clickOnLoginButton() {
        await this.click(this['Login button']);
    }

}