import { Action } from '@ngrx/store'
import { Authorization } from '@models/authorization.model'
import * as AuthorizationActions from '@actions/authorization.actions'

// Section 1
const initialState: Authorization = {
    token: false
}

export function authorizationReducer(state: Authorization = initialState, action: AuthorizationActions.Actions) {

    switch(action.type) {
        case AuthorizationActions.ADD_AUTHORIZATION:
            return action.payload;
        default:
            return state;
    }
}