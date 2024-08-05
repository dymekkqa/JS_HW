import { SalesPortalPage } from '../salesPortal.page.js';

export class HomePage extends SalesPortalPage{
    readonly uniqueElement = '#contentInner';    
    readonly 'Button Products from Menu' = '(//a[contains(@class, "nav-link")])[3]';

    async clickOnButtonProductsFromMenu(){
        this.click(this['Button Products from Menu'])
    }
}