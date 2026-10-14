import { By, PageElement } from '@serenity-js/web';

export const ShoppingCartPage = {
    termsOfService: PageElement.located(
        By.css('#termsofservice')
    ).describedAs('terms of service checkbox'),

    checkoutButton: PageElement.located(
        By.role('button', { name: 'Checkout' })
    ).describedAs('Checkout button'),
};