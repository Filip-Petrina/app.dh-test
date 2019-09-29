// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Authorization } from '@models/authorization.model'

export const ADD_AUTHORIZATION = '[AUTHORIZATION] Add'

export class AddAuthorization implements Action {
    readonly type = ADD_AUTHORIZATION;

    constructor(public payload: Authorization) {}
}


export type Actions = AddAuthorization