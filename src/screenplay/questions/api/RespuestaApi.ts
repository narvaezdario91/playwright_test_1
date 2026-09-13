import { LastResponse } from '@serenity-js/rest';

export class RespuestaApi {
    static codigoEstado = () =>
        LastResponse.status()
            .describedAs('código de estado de la última respuesta HTTP');

    static cuerpo = <T = any>() =>
        LastResponse.body<T>()
            .describedAs('cuerpo de la última respuesta HTTP');
}
