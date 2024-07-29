// Разработать метод для выбора элемента в дропдауте "клавиатурой":
//   selectDropdownValueWithKeys(dropdownSelector: string, optionsSelector: string, value: string)
//   со следующими шагами:
//     - кликнуть на дропдаун
//     - дождаться появления элементов дропдауна на экране
//     - Найти сколько раз надо нажать "вниз"
//     - столько раз нажать стрелку ВНИЗ на клавиатуре, чтобы добраться до нужного элемента
//     - нажать кнопку "Enter" на клавиатуре

// Проверьте работу метода тут:
// https://the-internet.herokuapp.com/
// станица Dropdown





import { Key } from 'webdriverio';

const url = 'https://the-internet.herokuapp.com/';
const dropdownLink = 'a[href="/dropdown"]';
const dropdownSelector = '#dropdown';
const optionsSelector = '#dropdown option';

describe('Dropdown Selection Suite', () => {
    before(async () => {
        await browser.maximizeWindow();
    });

    beforeEach(async () => {
        await browser.url(url);
    });

    it('select value from dropdown using keyboard', async () => {        
        const dropdownLinkElem = await $(dropdownLink);
        await dropdownLinkElem.waitForDisplayed({ timeout: 5000 });
        await dropdownLinkElem.click();
        
        await selectDropdownValueWithKeys(dropdownSelector, optionsSelector, 'Option 2');
    });
});

async function selectDropdownValueWithKeys(dropdownSelector: string, optionsSelector: string, value: string) {    
    const dropdown = await $(dropdownSelector);
    await dropdown.waitForDisplayed({ timeout: 5000 });
    await dropdown.click();
    
    const options = await $$(optionsSelector);
    console.log(options)
    await browser.waitUntil(
        async () => options.length > 0,
        {
            timeout: 5000,
            timeoutMsg: 'Options did not appear within 5 seconds',
        }
    );
    
    let downPresses = 0;
    for (let i = 0; i < options.length; i++) {
        const optionText = await options[i].getText();
        if (optionText === value) {
            downPresses = i;
            break;
        }
    }    
    for (let i = 0; i < downPresses; i++) {
        await browser.keys(Key.ArrowDown);
    }
        
    await browser.keys(Key.Enter);
}
