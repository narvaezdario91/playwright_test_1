import { Given, When, Then } from '@cucumber/cucumber';
import { actorCalled } from '@serenity-js/core';
import { Ensure, equals, includes } from '@serenity-js/assertions';

import { NavegarA } from '../../src/screenplay/tasks/ui/NavegarA';
import { IniciarSesionOrangeHRM } from '../../src/screenplay/tasks/ui/IniciarSesionOrangeHRM';
import { RecuperarPassword } from '../../src/screenplay/tasks/ui/RecuperarPassword';
import { OrangeHRMQuestions } from '../../src/screenplay/questions/ui/OrangeHRMQuestions';

Given('que {string} navega a la página de inicio de sesión de OrangeHRM', async (nombreActor: string) => {
    await actorCalled(nombreActor).attemptsTo(
        NavegarA.laPaginaDeOrangeHRM()
    );
});

When('{string} ingresa a OrangeHRM con el usuario {string} y la contraseña {string}', async (nombreActor: string, usuario: string, clave: string) => {
    await actorCalled(nombreActor).attemptsTo(
        IniciarSesionOrangeHRM.conCredenciales(usuario, clave)
    );
});

When('{string} intenta iniciar sesión en OrangeHRM sin ingresar credenciales', async (nombreActor: string) => {
    await actorCalled(nombreActor).attemptsTo(
        IniciarSesionOrangeHRM.sinCredenciales()
    );
});

When('{string} selecciona la opción de recuperación de contraseña en OrangeHRM', async (nombreActor: string) => {
    await actorCalled(nombreActor).attemptsTo(
        RecuperarPassword.solicitarOlvidoContrasena()
    );
});

Then('{string} debería ver el panel principal de OrangeHRM con el título {string}', async (nombreActor: string, tituloEsperado: string) => {
    await actorCalled(nombreActor).attemptsTo(
        Ensure.that(OrangeHRMQuestions.tituloDashboard(), equals(tituloEsperado))
    );
});

Then('{string} debería ver una alerta de error en OrangeHRM que contiene {string}', async (nombreActor: string, mensajeEsperado: string) => {
    await actorCalled(nombreActor).attemptsTo(
        Ensure.that(OrangeHRMQuestions.mensajeAlerta(), includes(mensajeEsperado))
    );
});

Then('{string} debería ver el mensaje de validación de campo requerido {string}', async (nombreActor: string, mensajeEsperado: string) => {
    await actorCalled(nombreActor).attemptsTo(
        Ensure.that(OrangeHRMQuestions.mensajeCampoRequerido(), includes(mensajeEsperado))
    );
});

Then('{string} debería ver la pantalla de recuperación con el título {string}', async (nombreActor: string, tituloEsperado: string) => {
    await actorCalled(nombreActor).attemptsTo(
        Ensure.that(OrangeHRMQuestions.tituloRecuperacionPassword(), equals(tituloEsperado))
    );
});
