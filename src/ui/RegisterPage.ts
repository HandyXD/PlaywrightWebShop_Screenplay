import { By, PageElement } from '@serenity-js/web';

export const RegisterPage = {
    goToRegisterPage: () =>
        PageElement.located(
            By.role('link', {
                name: 'Register',
            })
        ).describedAs('Open the Register page'),

    gender: () =>
        PageElement.located(
            By.role('radio', {
                name: 'Female',
                exact: true,
            })
        ).describedAs('Female gender'),

    firstName: () =>
        PageElement.located(
            By.role('textbox', {
                name: 'First name:',
            })
        ).describedAs('first name field'),

    lastName: () =>
        PageElement.located(
            By.role('textbox', {
                name: 'Last name:',
            })
        ).describedAs('last name field'),

    email: () =>
        PageElement.located(
            By.role('textbox', {
                name: 'Email:',
            })
        ).describedAs('email field'),

    password: () =>
        PageElement.located(
            By.role('textbox', {
                name: 'Password:',
                exact: true,
            })
        ).describedAs('password field'),

    confirmPassword: () =>
        PageElement.located(
            By.role('textbox', {
                name: 'Confirm password:',
            })
        ).describedAs('confirm password field'),

    registerButton: () =>
        PageElement.located(
            By.role('button', {
                name: 'Register',
            })
        ).describedAs('Register button'),

    successMessage: () =>
        PageElement.located(
            By.css('.result')
        ).describedAs('registration success message'),
};