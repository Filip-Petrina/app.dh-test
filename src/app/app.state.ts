import { Authorization } from './models/authorization.model';

export interface AppState {
    readonly authorization: Authorization;
}