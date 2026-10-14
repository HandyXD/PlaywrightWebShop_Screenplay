import { Task } from "@serenity-js/core";
import { Click, Enter, Select } from "@serenity-js/web";
import { PaymentMethod, ShippingAddress, UserInfo } from "../models/DataEntryModels";
import { CheckoutPage } from "../ui/CheckoutPage";

export const Checkout = {

    CompleteShippingAddress: (user: UserInfo,address: ShippingAddress,) =>
        Task.where(
            '#actor enters the shipping address',

            Enter.theValue(user.first_name)
                .into(CheckoutPage.firstName),

            Enter.theValue(user.last_name)
                .into(CheckoutPage.lastName),

            Enter.theValue(user.email)
                .into(CheckoutPage.email),

            Select.value(address.country)
                .from(CheckoutPage.country),

            Enter.theValue(address.city)
                .into(CheckoutPage.city),

            Enter.theValue(address.address_1)
                .into(CheckoutPage.address),

            Enter.theValue(address.zip_postal_code)
                .into(CheckoutPage.zipCode),

            Enter.theValue(address.phone_number)
                .into(CheckoutPage.phone),

            Click.on(CheckoutPage.billingContinueButton),
        ),

    creditCard: () =>
        Task.where(
            '#actor selects Credit Card as payment method',

            Click.on(CheckoutPage.shippingContinueButton),
            Click.on(CheckoutPage.shippingMethodContinueButton),
            Click.on(CheckoutPage.creditCard),
            Click.on(CheckoutPage.paymentMethodContinueButton),
        ),

    CompletePayment: (payment: PaymentMethod) =>
        Task.where(
            '#actor completes the payment information',

            Select.value(payment.card_type)
                .from(CheckoutPage.cardType),

            Enter.theValue(payment.cardholder_name)
                .into(CheckoutPage.cardholderName),

            Enter.theValue(payment.card_number)
                .into(CheckoutPage.cardNumber),

            Select.value(payment.expiration_month)
                .from(CheckoutPage.expirationMonth),

            Select.value(payment.expiration_year)
                .from(CheckoutPage.expirationYear),

            Enter.theValue(payment.card_code)
                .into(CheckoutPage.cardCode),

            Click.on(CheckoutPage.paymentInfoContinueButton),

            Click.on(CheckoutPage.confirmButton),
        ),
};