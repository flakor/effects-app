import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as usuariosActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

import { of } from 'rxjs';

@Injectable()

export class UsuariosEffects {
    
    constructor(
        private actions$: Actions,
        public usuarioService: UsuarioService
    ) { }
    
    @Effect()
    cargarUsuarios$ = this.actions$
        .pipe(ofType(usuariosActions.CARGAR_USUARIOS),
            switchMap(() => {
                    return this.usuarioService.getUsers()
                    .pipe(
                        map( users => new usuariosActions.CargarUsariosSuccess(users)),
                        catchError( error => of(new usuariosActions.CargarUsariosFail(error)))
                    );
            } )
        );

}

