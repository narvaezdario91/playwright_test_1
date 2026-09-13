import { Text } from '@serenity-js/web';
import { FormularioLoginUI } from '../../ui/FormularioLoginUI';

export class MensajeError {
    static delLogin = () =>
        Text.of(FormularioLoginUI.mensajeError())
            .describedAs('mensaje de error de inicio de sesión');
}
