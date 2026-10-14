import { chromium, Browser } from 'playwright';
import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { configure, Cast } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { Photographer, TakePhotosOfFailures } from '@serenity-js/web';

let browser: Browser;
// setDefaultTimeout(30000);

BeforeAll(async () => {
    browser = await chromium.launch({
        headless: false,
    });

    configure({
        actors: Cast.where(actor =>
            actor.whoCan(
                BrowseTheWebWithPlaywright.using(
                    browser,
                    {
                        baseURL: 'https://demowebshop.tricentis.com',
                            recordVideo: {
                                dir: './reports/videos',
                                size: { width: 1280, height: 720 },
                        },
                    }
                )
            )
        ),

        crew: [
            '@serenity-js/console-reporter',
            Photographer.whoWill(TakePhotosOfFailures),
            [
                '@serenity-js/html-reporter',
                {
                    // outputDirectory: './reports/serenity-js',
                    specDirectory: './tests',
                }
            ],
        ],
    });
});

AfterAll(async () => {
    await browser?.close();
});