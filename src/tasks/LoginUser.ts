import { Task } from "@serenity-js/core";
import { UserInfo } from "../models/DataEntryModels";
import { Click, Enter, Navigate } from "@serenity-js/web";
import { Routes } from "../utils/Routes";
import { LoginPage } from "../ui/LoginPage";

export const LoginUser = {
    withCredentials: (user: UserInfo) =>
        Task.where(
            '#actor authenticates with valid credentials',
            Navigate.to(Routes.login),
            Enter.theValue(user.email).into(LoginPage.email),
            Enter.theValue(user.password).into(LoginPage.password),
            Click.on(LoginPage.loginButton),
        ),
};