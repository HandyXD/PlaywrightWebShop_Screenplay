import { Text } from '@serenity-js/web';
import { RegisterPage } from '../ui/RegisterPage';
import { CheckoutPage } from '../ui/CheckoutPage';
import { ProductPage } from '../ui/ProductPage';

export const RegistrationMessage = {
    textRegister: () =>
        Text.of(RegisterPage.successMessage()),
};

export const OrderConfirmationMessage = {
    text: () => Text.of(CheckoutPage.successMessage),
};


export const CartMessage = {
    text: () => Text.of(ProductPage.successMessage),
};