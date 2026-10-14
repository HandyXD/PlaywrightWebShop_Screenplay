import { World, IWorldOptions } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import { Page } from 'playwright';

export class CustomWorld extends World {

    actor!: Actor;
    page!: Page;

    constructor(options: IWorldOptions) {
        super(options);
    }
}