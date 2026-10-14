import { Given, When, Then } from '@cucumber/cucumber';
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core';
import { OpenWebsite } from '../../src/tasks/OpenWeb';
import { Routes } from '../../src/utils/Routes';
import { testData } from '../../src/data/testData';
import { RegisterUser } from '../../src/tasks/RegisterUser';
import { Ensure, equals } from '@serenity-js/assertions';
import { CartMessage, OrderConfirmationMessage, RegistrationMessage } from '../../src/questions/Messages';
import { LoginUser } from '../../src/tasks/LoginUser';
import { Shopping } from '../../src/tasks/Shopping';
import { Checkout } from '../../src/tasks/Checkout';

Given('el usuario ingresa a la aplicacion', async function(){
    await actorCalled('Lilit').attemptsTo(
        OpenWebsite.at(Routes.home),
    );
});

When('el usuario da clic en la opción Register', async function() {
    await actorInTheSpotlight().attemptsTo(
        RegisterUser.openRegistration()
    );
});

When('ingresa sus datos de registro', async function() {
    await actorInTheSpotlight().attemptsTo(
        RegisterUser.withData(testData.user_info)
    );
});

Then('el sistema debe mostrar el mensaje de registro exitoso', async function () {
    await actorInTheSpotlight().attemptsTo(
        Ensure.that(
            RegistrationMessage.textRegister(),
            equals(testData.order_confirmation.msg_registration)
        )
    );
});

Given('el usuario se autentica con credenciales validas', async function () {
    await actorInTheSpotlight().attemptsTo(
        LoginUser.withCredentials(testData.user_info)
    );
});

When('el usuario navega a una categoria y subcategoria si existe', async function () {
    await actorInTheSpotlight().attemptsTo(
        Shopping.selectCategoryAndSubcategory()
    );
});

When('selecciona un producto y lo agrega al carrito', async function () {
    await actorInTheSpotlight().attemptsTo(
        Shopping.toCart()
    );
});

Then('el sistema debe mostrar el mensaje de producto agregado', async function () {
    await actorInTheSpotlight().attemptsTo(
        Ensure.that(
            CartMessage.text(),
            equals(testData.order_confirmation.msg_add_cart)
        )
    );
});


// Checkout

When('el usuario ingresa al carrito y va al Checkout', async function () {
    await actorInTheSpotlight().attemptsTo(
        Shopping.toCheckout()
    );
});

When('ingresa su dirección de envío', async function () {
    await actorInTheSpotlight().attemptsTo(
        Checkout.CompleteShippingAddress(
            testData.user_info,
            testData.shipping_address
        )
    );
});

When('selecciona Credit Card como metodo de pago', async function () {
    await actorInTheSpotlight().attemptsTo(
        Checkout.creditCard()
    );
});

When('completa la informacion de pago para confirmar la orden', async function () {
    await actorInTheSpotlight().attemptsTo(
        Checkout.CompletePayment(testData.payment_method)
    );
});

Then('el sistema debe mostrar el mensaje de orden procesada', async function () {
    await actorInTheSpotlight().attemptsTo(
        Ensure.that(
            OrderConfirmationMessage.text(),
            equals(testData.order_confirmation.msg_order_ok)
        )
    );
});