import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';


export const CARGAR_USUARIOS = '[Usuarios] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar usuarios Fail';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar usuarios Success';

export class CargarUsarios implements Action {
    readonly type = CARGAR_USUARIOS;

}

export class CargarUsariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;

    constructor( public payload: any) {}

}


export class CargarUsariosSuccess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;

    constructor( public usuarios: Usuario[]) {}

}

export type usuariosAcciones = CargarUsarios | CargarUsariosFail | CargarUsariosSuccess;
