import { Text } from '@serenity-js/web';
import { OrangeHRMLoginUI } from '../../ui/OrangeHRMLoginUI';

export class OrangeHRMQuestions {
    static tituloDashboard = () =>
        Text.of(OrangeHRMLoginUI.encabezadoDashboard())
            .describedAs('título del dashboard de OrangeHRM');

    static mensajeAlerta = () =>
        Text.of(OrangeHRMLoginUI.alertaMensajeError())
            .describedAs('mensaje de alerta de error');

    static mensajeCampoRequerido = () =>
        Text.of(OrangeHRMLoginUI.mensajeCampoRequerido())
            .describedAs('mensaje de validación de campo requerido');

    static tituloRecuperacionPassword = () =>
        Text.of(OrangeHRMLoginUI.tituloRecuperacionPassword())
            .describedAs('título del formulario de recuperación de contraseña');
}
