import { By, PageElement } from '@serenity-js/web';

export const ProductPage = {
    smartphone: PageElement.located(
        By.role('link', {name: 'Smartphone',exact: true})
    ).describedAs('Smartphone product'),

    addToCartButton: PageElement.located(
        By.css('#add-to-cart-button-43')
    ).describedAs('Add to cart button'),

    successMessage: PageElement.located(
        By.css('#bar-notification .content')
    ).describedAs('product added notification'),
};