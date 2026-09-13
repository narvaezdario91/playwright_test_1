import { Task } from '@serenity-js/core';
import { Send, PostRequest } from '@serenity-js/rest';
import { SolicitudCrearUsuario } from '../../../domain/models/Usuario';

export class CrearUsuario {
    static conDatos = (datos: SolicitudCrearUsuario) =>
        Task.where(`#actor crea un nuevo usuario con nombre "${datos.name}" y cargo "${datos.job}"`,
            Send.a(
                PostRequest.to('/api/users')
                    .with(datos)
                    .using({
                        headers: {
                            'Content-Type': 'application/json',
                            'User-Agent': 'Playwright-Serenity-Test/1.0',
                        },
                    })
            )
        );
}
