import { Task } from "@serenity-js/core";
import { Click } from "@serenity-js/web";
import { HomePage } from "../ui/HomePage";
import { ProductPage } from "../ui/ProductPage";
import { ShoppingCartPage } from "../ui/ShoppingCartPage";

export const Shopping = {
    selectCategory: () =>
        Task.where(
            '#actor selects Electronics category',
            Click.on(HomePage.category),
        ),

    selectSubcategory: () =>
        Task.where(
            '#actor selects Cell phones subcategory',
            Click.on(HomePage.subcategory),
        ),

    selectCategoryAndSubcategory: () =>
        Task.where(
            '#actor browses Electronics / Cell phones',
            Click.on(HomePage.category),
            Click.on(HomePage.subcategory),
        ),

    toCart: () =>
        Task.where(
            '#actor adds the smartphone to the cart',
            Click.on(ProductPage.smartphone),
            Click.on(ProductPage.addToCartButton),
        ),
    
    toCheckout: () =>
        Task.where(
            '#actor proceeds to checkout',
            Click.on(HomePage.shoppingCart),
            Click.on(ShoppingCartPage.termsOfService),
            Click.on(ShoppingCartPage.checkoutButton),
        ),
};