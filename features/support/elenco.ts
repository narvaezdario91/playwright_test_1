import { Cast, Actor } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { CallAnApi } from '@serenity-js/rest';
import { Page } from 'playwright';
import * as dotenv from 'dotenv';

dotenv.config();

export class Elenco implements Cast {
    constructor(
        private readonly page?: Page,
        private readonly apiBaseUrl: string = process.env.BASE_URL_API || 'https://reqres.in'
    ) {}

    prepare(actor: Actor): Actor {
        const abilities: any[] = [
            CallAnApi.at(this.apiBaseUrl),
        ];

        if (this.page) {
            abilities.push(BrowseTheWebWithPlaywright.usingPage(this.page));
        }

        return actor.whoCan(...abilities);
    }
}
