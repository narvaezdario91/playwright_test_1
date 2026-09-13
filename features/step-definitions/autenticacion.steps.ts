import { Given, When, Then } from '@cucumber/cucumber';
import { actorCalled } from '@serenity-js/core';
import { Ensure, equals, includes } from '@serenity-js/assertions';

import { NavegarA } from '../../src/screenplay/tasks/ui/NavegarA';
import { IniciarSesion } from '../../src/screenplay/tasks/ui/IniciarSesion';
import { TituloPagina } from '../../src/screenplay/questions/ui/TituloPagina';
import { MensajeError } from '../../src/screenplay/questions/ui/MensajeError';

Given('que {string} navega a la página de inicio de sesión', async (nombreActor: string) => {
    await actorCalled(nombreActor).attemptsTo(
        NavegarA.laPaginaDeInicio()
    );
});

When('{string} ingresa el usuario {string} y la contraseña {string}', async (nombreActor: string, usuario: string, clave: string) => {
    await actorCalled(nombreActor).attemptsTo(
        IniciarSesion.conUsuario(usuario, clave)
    );
});

When('que {string} ingresa el usuario {string} y la contraseña {string}', async (nombreActor: string, usuario: string, clave: string) => {
    await actorCalled(nombreActor).attemptsTo(
        IniciarSesion.conUsuario(usuario, clave)
    );
});

Then('{string} debería ver la página de productos con el título {string}', async (nombreActor: string, tituloEsperado: string) => {
    await actorCalled(nombreActor).attemptsTo(
        Ensure.that(TituloPagina.deProductos(), equals(tituloEsperado))
    );
});

Then('{string} debería ver un mensaje de error que contiene {string}', async (nombreActor: string, mensajeEsperado: string) => {
    await actorCalled(nombreActor).attemptsTo(
        Ensure.that(MensajeError.delLogin(), includes(mensajeEsperado))
    );
});
