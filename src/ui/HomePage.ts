import { By, PageElement } from '@serenity-js/web';

export const HomePage = {
    registerLink: PageElement.located(
        By.role('link', { name: 'Register' })
    ).describedAs('Register link'),

    loginLink: PageElement.located(
        By.role('link', { name: 'Log in' })
    ).describedAs('Log in link'),

    category: PageElement.located(
        By.xpath('(//a[@href="/electronics"])[1]')
    ).describedAs('Electronics category'),

    subcategory: PageElement.located(
        By.xpath('(//a[@href="/cell-phones"])[3]')
    ).describedAs('Cell phones subcategory'),

    shoppingCart: PageElement.located(
        By.xpath('(//a[@href="/cart"])[1]')
    ).describedAs('Shopping cart link'),
};