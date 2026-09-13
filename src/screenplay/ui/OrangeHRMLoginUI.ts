import { By, PageElement, PageElements } from '@serenity-js/web';

export class OrangeHRMLoginUI {
    static campoUsuario = () =>
        PageElement.located(By.css('input[name="username"]'))
            .describedAs('campo de nombre de usuario en OrangeHRM');

    static campoContrasena = () =>
        PageElement.located(By.css('input[name="password"]'))
            .describedAs('campo de contraseña en OrangeHRM');

    static botonIniciarSesion = () =>
        PageElement.located(By.css('button[type="submit"]'))
            .describedAs('botón de Iniciar Sesión en OrangeHRM');

    static enlaceOlvidoContrasena = () =>
        PageElement.located(By.css('.orangehrm-login-forgot-header'))
            .describedAs('enlace de recuperación de contraseña');

    static alertaMensajeError = () =>
        PageElement.located(By.css('.oxd-alert-content-text'))
            .describedAs('mensaje de alerta de error en OrangeHRM');

    static mensajeCampoRequerido = () =>
        PageElements.located(By.css('.oxd-input-field-error-message'))
            .first()
            .describedAs('mensaje de campo requerido');

    static encabezadoDashboard = () =>
        PageElement.located(By.css('.oxd-topbar-header-breadcrumb h6'))
            .describedAs('encabezado del Dashboard de OrangeHRM');

    static tituloRecuperacionPassword = () =>
        PageElement.located(By.css('.orangehrm-forgot-password-title'))
            .describedAs('título de la pantalla de recuperación de contraseña');
}
