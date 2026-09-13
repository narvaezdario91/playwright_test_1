export interface SolicitudCrearUsuario {
    name: string;
    job: string;
}

export interface RespuestaCrearUsuario {
    name: string;
    job: string;
    id: string;
    createdAt: string;
}

export interface UsuarioApi {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface RespuestaConsultaUsuario {
    data: UsuarioApi;
}
