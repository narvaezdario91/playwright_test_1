import { ArtifactArchiver, configure } from '@serenity-js/core';
import { ConsoleReporter } from '@serenity-js/console-reporter';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';

configure({
    crew: [
        ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
        ConsoleReporter.forDarkTerminals(),
        SerenityBDDReporter.fromJSON({
            specDirectory: './features',
        }),
    ],
});

