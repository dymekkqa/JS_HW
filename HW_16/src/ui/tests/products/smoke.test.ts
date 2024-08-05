import { generateNewProduct } from '../../../data/products/generateProduct.js';
import { AddProductService } from '../../services/products/addNewProduct.service.js';
import { AlertService } from '../../services/products/alert.service.js';
import { DeleteModalService } from '../../services/products/deleteModalService.js';
import { HomePageService } from '../../services/products/homePage.service.js';
import { ProductDetailsModalService } from '../../services/products/product.details.modal.service.js';
import { ProductsListService } from '../../services/products/products.service.js';
import { SigninService } from '../../services/products/sign.in.service.js';
import { AlertsText } from '../../../data/products/alertsText.js';

describe('[UI] [Products] Smoke', () => {
  const addProductService = new AddProductService();
  const productsService = new ProductsListService();
  const signInService = new SigninService();
  const homePageService = new HomePageService();
  const modalPageService = new ProductDetailsModalService();
  const modalDelete = new DeleteModalService();
  const alert = new AlertService()

  beforeEach(async () => {
    await browser.reloadSession();
    await browser.maximizeWindow();
    await browser.url('https://anatoly-karpovich.github.io/aqa-course-project/#');
    await signInService.loginAsAdmin();
    await homePageService.openProductsPage();
  });

  afterEach(async () => {
    await signInService.singOut();
    await browser.deleteSession();
  });

  it('Should create valid product v3', async () => {
    await productsService.openAddNewProductPage();
    const product = generateNewProduct();
    await addProductService.create(product);
    const actualProduct = await productsService.getCreatedProductData(product.name);
    const expectedProduct = { name: product.name, manufacturer: product.manufacturer, price: product.price };
    expect(actualProduct).toMatchObject(expectedProduct);
  });

  it('Check product details', async () =>{
    await productsService.openAddNewProductPage();
    const product = generateNewProduct();
    await addProductService.create(product);        
    const expectedProduct = { name: product.name, manufacturer: product.manufacturer, price: product.price, amount: product.amount, notes: product.notes };
    await alert.closeAlert()    
    await productsService.openDetails(product.name);
    const actualProductFromModal = await modalPageService.getProductDetails();
    expect(actualProductFromModal).toMatchObject(expectedProduct);    
  });

  it('Check delete product', async () =>{
    await productsService.openAddNewProductPage();
    const product = generateNewProduct();
    await addProductService.create(product);
    await alert.closeAlert()       
    await productsService.openDetails(product.name);      
    await modalPageService.closeModal();
    await productsService.deleteProduct(product.name);
    await modalDelete.submit();    
    await alert.checkAlertText(AlertsText.succesfullDeleted)
  });
});
