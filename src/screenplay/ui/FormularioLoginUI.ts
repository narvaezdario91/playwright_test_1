import { By, PageElement } from '@serenity-js/web';

export class FormularioLoginUI {
    static campoUsuario = () =>
        PageElement.located(By.id('user-name'))
            .describedAs('campo de nombre de usuario');

    static campoContrasena = () =>
        PageElement.located(By.id('password'))
            .describedAs('campo de contraseña');

    static botonIngresar = () =>
        PageElement.located(By.id('login-button'))
            .describedAs('botón de inicio de sesión');

    static mensajeError = () =>
        PageElement.located(By.css('[data-test="error"]'))
            .describedAs('mensaje de error de autenticación');
}
