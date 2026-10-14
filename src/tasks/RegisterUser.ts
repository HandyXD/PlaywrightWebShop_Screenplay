import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/web';
import { UserInfo } from '../models/DataEntryModels';
import { RegisterPage } from '../ui/RegisterPage';

export const RegisterUser = {

    openRegistration: () =>
        Task.where(
            '#actor opens the registration page',

            Click.on(RegisterPage.goToRegisterPage()),
        ),

    withData: (user: UserInfo) =>
        Task.where(
            '#actor enters registration data',

            Click.on(RegisterPage.gender()),
            Enter.theValue(user.first_name).into(RegisterPage.firstName()),
            Enter.theValue(user.last_name).into(RegisterPage.lastName()),
            Enter.theValue(user.email).into(RegisterPage.email()),
            Enter.theValue(user.password).into(RegisterPage.password()),
            Enter.theValue(user.password).into(RegisterPage.confirmPassword()),

            Click.on(RegisterPage.registerButton()),
        ),
};