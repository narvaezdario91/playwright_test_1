import { Task } from '@serenity-js/core';
import { Send, GetRequest } from '@serenity-js/rest';

export class ConsultarUsuario {
    static porId = (id: number | string) =>
        Task.where(`#actor consulta el usuario con id ${id}`,
            Send.a(GetRequest.to(`/api/users/${id}`))
        );
}
