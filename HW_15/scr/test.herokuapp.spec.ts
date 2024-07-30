// Task 1.

// Разработать тест со следующими шагами:

//   - открыть https://the-internet.herokuapp.com/
//   - перейти на страницу Dynamic Loading
//   - Дождаться появления каждой ссылки на странице (их 2)
//   - кликнуть по ссылке Example 1: Element on page that is hidden
//   - дождаться появления кнопки start
//   - кликнуть по кнопке start
//   - дождаться появления текста "Hello World!" в теге h4 с помощью метода waitForElementWithText(), который вам надо разработать!:)

//  Создать функцию waitForElementWithText(selector, text, timeout) для ожидания определенного текста (text) 
//  у элемента с определенным селектором (selector) на протяжении определенного времени (timeout):
//   - Использовать browser.waitUntil с комбинацией проверок (элемент виден и тест верный)
//   - Добавить понятный timeoutMsg, с пояснением какие проверки не пройдены и селектором элемента



const url = 'https://the-internet.herokuapp.com/';
const dynamicLoadingLink = 'a[href="/dynamic_loading"]';
const dynamicLoading1Link = 'a[href="/dynamic_loading/1"]';
const startButton = '#start button';
const helloWorldText = 'div[id="finish"] h4';

describe('Register Suite', () => {
    before(async () => {
        await browser.maximizeWindow();
    });

    beforeEach(async () => {
        await browser.url(url);
    });

    it('check Hello World! text after loading', async () => {        
        const dynamicLoadingLinkElem = await $(dynamicLoadingLink);
        await dynamicLoadingLinkElem.waitForDisplayed({ timeout: 5000 });
        await dynamicLoadingLinkElem.click();
        
        const dynamicLoading1LinkElem = await $(dynamicLoading1Link);
        await dynamicLoading1LinkElem.waitForDisplayed({ timeout: 5000 });
        await dynamicLoading1LinkElem.click();
        
        const startButtonElem = await $(startButton);
        await startButtonElem.waitForDisplayed({ timeout: 5000 });
        
        await startButtonElem.click();
        
        await waitForElementWithText(helloWorldText, 'Hello World!', 10000);
    });
});


async function waitForElementWithText(selector: string, text: string, timeout: number) {
    await browser.waitUntil(
        async () => {
            const element = await $(selector);
            const isDisplayed = await element.isDisplayed();
            const elementText = await element.getText();
            return isDisplayed && elementText === text;
        },
        {
            timeout,
            timeoutMsg: `Expected text "${text}" to be present in element ${selector} within ${timeout} ms`,
        }
    );
}

