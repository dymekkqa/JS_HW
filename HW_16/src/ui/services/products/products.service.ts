import { AddNewProductPage } from '../../pages/products/addNewProduct.page.js';
import { DeleteModal } from '../../pages/products/delete.modal.js';
import { ProductsPage } from '../../pages/products/products.page.js';

export class ProductsListService {
  constructor(
    private productsPage = new ProductsPage(),
    private addNewProductPage = new AddNewProductPage(),
    private deleteModal = new DeleteModal()
  ) {}

  async openAddNewProductPage() {
    await this.productsPage.clickOnAddNewProduct();
    await this.productsPage.waitForSpinnerToHide();
    await this.addNewProductPage.waitForOpened();
  }

  async getCreatedProductData(productName: string) {
    const createdProductData = await this.productsPage.getDataByName(productName);
    return createdProductData;
  }

  async openDetails(productName: string){        
    const data = await this.getCreatedProductData(productName);    
    await this.productsPage.openModalDetailsByName(data.name);
    await this.productsPage.waitForSpinnerToHide()
  }
  
  async deleteProduct(productName: string){       
    const data = await this.getCreatedProductData(productName);   
    await this.productsPage.deleteRowByName(data.name);
    await this.productsPage.waitForSpinnerToHide();
    await this.deleteModal.waitForOpened()
  }
} 

