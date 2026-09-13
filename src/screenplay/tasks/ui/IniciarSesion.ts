import { Task } from '@serenity-js/core';
import { Clear, Click, Enter } from '@serenity-js/web';
import { FormularioLoginUI } from '../../ui/FormularioLoginUI';
import { Credenciales } from '../../../domain/models/Credenciales';

export class IniciarSesion {
    static conLasCredenciales = (credenciales: Credenciales) =>
        Task.where(`#actor inicia sesión con el usuario "${credenciales.usuario}"`,
            Clear.theValueOf(FormularioLoginUI.campoUsuario()),
            Enter.theValue(credenciales.usuario).into(FormularioLoginUI.campoUsuario()),
            Clear.theValueOf(FormularioLoginUI.campoContrasena()),
            Enter.theValue(credenciales.clave).into(FormularioLoginUI.campoContrasena()),
            Click.on(FormularioLoginUI.botonIngresar())
        );

    static conUsuario = (usuario: string, clave: string) =>
        IniciarSesion.conLasCredenciales({ usuario, clave });
}
