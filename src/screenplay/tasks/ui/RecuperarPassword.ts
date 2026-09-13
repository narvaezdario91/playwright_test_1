import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { OrangeHRMLoginUI } from '../../ui/OrangeHRMLoginUI';

export class RecuperarPassword {
    static solicitarOlvidoContrasena = () =>
        Task.where('#actor navega a la sección de recuperación de contraseña',
            Click.on(OrangeHRMLoginUI.enlaceOlvidoContrasena())
        );
}
