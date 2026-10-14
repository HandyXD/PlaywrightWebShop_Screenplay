import { Page } from '@serenity-js/web';

export const PageTitle = Page.current()
    .title()
    .describedAs('the current page title');