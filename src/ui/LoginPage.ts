import { By, PageElement } from '@serenity-js/web';

export const LoginPage = {
    email: PageElement.located(
        By.role('textbox', { name: 'Email:' })
    ).describedAs('email field'),

    password: PageElement.located(
        By.role('textbox', { name: 'Password:', exact: true })
    ).describedAs('password field'),

    loginButton: PageElement.located(
        By.role('button', { name: 'Log in' })
    ).describedAs('Log in button'),
};