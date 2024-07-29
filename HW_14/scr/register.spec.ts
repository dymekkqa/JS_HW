// - Установить WebdriverIO командой  npm init wdio@latest .
// - Создать файл для теста с названием register.spec.ts
// - Добавить во wdio.conf.ts путь к файлу с тестом в массив specs
// Разработайте тест со следующими шагами:
// 1. Открыть страницу https://anatoly-karpovich.github.io/demo-login-form/ используя browser.url()
// 2. Кликнуть по кнопке Register методом . click()
// 3. Ввести валидные username/password (требования ниже) методом setValue()
// 4. Кликнуть Register
// 5. Завалидировать, верную нотификацию о регистрации методом .toHaveText()

// Страница регистрации:
// Username: обязательное, от 3 до 40 символов включительно, запрещены префиксные/постфиксные пробелы, как и имя состоящее из одних пробелов
// Password: обязательное, от 8 до 20 символов включительно, необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещен


const url = "https://anatoly-karpovich.github.io/demo-login-form/";
const loginInput = '#userNameOnRegister';
const passwordInput = '#passwordOnRegister';
const registerOnLoginButtonSelector = '#registerOnLogin';
const errorMessageSelector = '#errorMessageOnRegister';
const registerButtonSelector = '#register';

enum ErrorMessages {
    SUCCESS = 'Successfully registered! Please, click Back to return on login page',
    USERNAME_REQUIRED = 'Username is required',
    PASSWORD_RQUIRED = 'Password is required',
    USERNAME_MIN_LENGTH = 'Username should contain at least 3 characters',
    USERNAME_SPACES = 'Prefix and postfix spaces are not allowed is username',
    INVALID_DATA = 'Please, provide valid data',
    PASSWORD_MIN_LENGTH = 'Password should contain at least 8 characters',
    PASSWORD_UPPER = 'Password should contain at least one character in upper case',
    PASSWORD_LOWER= "Password should contain at least one character in lower case"
}


const testData = [    
    { username: 'validUser8', password: 'ValidPass1', expectedMessage: ErrorMessages.SUCCESS },    
    
    { username: '', password: 'ValidPass1', expectedMessage: ErrorMessages.USERNAME_REQUIRED },
    { username: 'ab', password: 'ValidPass1', expectedMessage: ErrorMessages.USERNAME_MIN_LENGTH},    
    { username: '   ', password: 'ValidPass1', expectedMessage: ErrorMessages.USERNAME_SPACES },
    { username: ' user ', password: 'ValidPass1', expectedMessage: ErrorMessages.USERNAME_SPACES },
    
    { username: 'validUser12', password: '', expectedMessage: ErrorMessages.PASSWORD_RQUIRED },
    { username: 'validUser13', password: 'short1', expectedMessage: ErrorMessages.PASSWORD_MIN_LENGTH },
    // { username: 'validUser', password: 'a'.repeat(21), expectedMessage: ErrorMessages.INVALID_DATA },
    { username: 'validUser14', password: 'password', expectedMessage: ErrorMessages.PASSWORD_UPPER },
    { username: 'validUser15', password: 'PASSWORD', expectedMessage: ErrorMessages.PASSWORD_LOWER },
    { username: 'validUser16', password: 'passWord', expectedMessage: ErrorMessages.SUCCESS },
    { username: 'validUser17', password: '    ', expectedMessage: ErrorMessages.PASSWORD_RQUIRED },
];


describe('Register Suite', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url(url);        
    });
    testData.forEach(({ username, password, expectedMessage }) => {
        it(`Register action with username: "${username}" and password: "${password}"`, async () => {            

            const registerOnLoginButton = await $(registerOnLoginButtonSelector);            
            await registerOnLoginButton.click();

            const login = await $(loginInput);            
            await login.setValue(username);

            const passwordElement = await $(passwordInput);            
            await passwordElement.setValue(password);

            const registerOnRegisterButton = await $(registerButtonSelector);            
            await registerOnRegisterButton.click();  

            const errorMessage = await $(errorMessageSelector);            
            
            await expect(errorMessage).toHaveText(expectedMessage);
        });
    });
});


