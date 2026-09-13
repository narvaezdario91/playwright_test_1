import { Task } from '@serenity-js/core';
import { Clear, Click, Enter } from '@serenity-js/web';
import { OrangeHRMLoginUI } from '../../ui/OrangeHRMLoginUI';

export class IniciarSesionOrangeHRM {
    static conCredenciales = (usuario: string, clave: string) =>
        Task.where(`#actor inicia sesión en OrangeHRM con el usuario "${usuario}"`,
            Clear.theValueOf(OrangeHRMLoginUI.campoUsuario()),
            Enter.theValue(usuario).into(OrangeHRMLoginUI.campoUsuario()),
            Clear.theValueOf(OrangeHRMLoginUI.campoContrasena()),
            Enter.theValue(clave).into(OrangeHRMLoginUI.campoContrasena()),
            Click.on(OrangeHRMLoginUI.botonIniciarSesion())
        );

    static sinCredenciales = () =>
        Task.where('#actor intenta iniciar sesión en OrangeHRM con campos vacíos',
            Click.on(OrangeHRMLoginUI.botonIniciarSesion())
        );
}
