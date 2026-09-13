import { Given, Then } from '@cucumber/cucumber';
import { actorCalled } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';

import { CrearUsuario } from '../../src/screenplay/tasks/api/CrearUsuario';
import { ConsultarUsuario } from '../../src/screenplay/tasks/api/ConsultarUsuario';
import { RespuestaApi } from '../../src/screenplay/questions/api/RespuestaApi';

Given('que {string} envía una solicitud para crear un usuario con nombre {string} y cargo {string}', async (nombreActor: string, nombre: string, cargo: string) => {
    await actorCalled(nombreActor).attemptsTo(
        CrearUsuario.conDatos({ name: nombre, job: cargo })
    );
});

Given('que {string} consulta la información del usuario con ID {int}', async (nombreActor: string, id: number) => {
    await actorCalled(nombreActor).attemptsTo(
        ConsultarUsuario.porId(id)
    );
});

Then('{string} debería recibir una respuesta con código de estado {int}', async (nombreActor: string, codigoEsperado: number) => {
    await actorCalled(nombreActor).attemptsTo(
        Ensure.that(RespuestaApi.codigoEstado(), equals(codigoEsperado))
    );
});
