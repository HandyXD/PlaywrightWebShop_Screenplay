import { By, PageElement } from '@serenity-js/web';

export const CheckoutPage = {

    // Billing

    firstName: PageElement.located(
        By.role('textbox', { name: 'First name:' })
    ).describedAs('first name field'),

    lastName: PageElement.located(
        By.role('textbox', { name: 'Last name:' })
    ).describedAs('last name field'),

    email: PageElement.located(
        By.role('textbox', { name: 'Email:' })
    ).describedAs('email field'),

    country: PageElement.located(
        By.css('#BillingNewAddress_CountryId')
    ).describedAs('country selector'),

    city: PageElement.located(
        By.role('textbox', { name: 'City:' })
    ).describedAs('city field'),

    address: PageElement.located(
        By.role('textbox', { name: 'Address 1:' })
    ).describedAs('address field'),

    zipCode: PageElement.located(
        By.role('textbox', { name: 'Zip / postal code:' })
    ).describedAs('zip code field'),

    phone: PageElement.located(
        By.role('textbox', { name: 'Phone number:' })
    ).describedAs('phone number field'),

    billingContinueButton: PageElement.located(
        By.css('#billing-buttons-container input')
    ).describedAs('billing continue button'),


    // Shipping

    shippingContinueButton: PageElement.located(
        By.css('#shipping-buttons-container input')
    ).describedAs('shipping continue button'),

    shippingMethodContinueButton: PageElement.located(
        By.css('#shipping-method-buttons-container input')
    ).describedAs('shipping method continue button'),


    // Payment method

    creditCard: PageElement.located(
        By.role('radio', { name: 'Credit Card Credit Card' })
    ).describedAs('Credit Card payment method'),

    paymentMethodContinueButton: PageElement.located(
        By.css('#payment-method-buttons-container input')
    ).describedAs('payment method continue button'),


    // Payment information

    cardType: PageElement.located(
        By.css('#CreditCardType')
    ).describedAs('card type selector'),

    cardholderName: PageElement.located(
        By.role('textbox', { name: 'Cardholder name' })
    ).describedAs('cardholder name field'),

    cardNumber: PageElement.located(
        By.role('textbox', { name: 'Card number' })
    ).describedAs('card number field'),

    expirationMonth: PageElement.located(
        By.css('#ExpireMonth')
    ).describedAs('expiration month selector'),

    expirationYear: PageElement.located(
        By.css('#ExpireYear')
    ).describedAs('expiration year selector'),

    cardCode: PageElement.located(
        By.role('textbox', { name: 'Card code' })
    ).describedAs('card code field'),

    paymentInfoContinueButton: PageElement.located(
        By.css('#payment-info-buttons-container input')
    ).describedAs('payment information continue button'),

    confirmButton: PageElement.located(
        By.role('button', { name: 'Confirm' })
    ).describedAs('confirm order button'),

    successMessage: PageElement.located(
        By.css('.section.order-completed .title')
    ).describedAs('order confirmation message'),
};