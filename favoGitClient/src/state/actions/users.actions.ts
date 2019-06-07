import { Action } from '@ngrx/store';
import { UserGitHub } from '../../app/models/userGitHub';

// Section 2
export const ADD_USER       = 'Add';
export const GET_USER_ACTION = 'GetUsersAction';
export const LOAD_USERS = 'load';

// Section 3
export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: UserGitHub) {}
}

export class EffectGetUsersAction implements Action {
  readonly type = GET_USER_ACTION;

  constructor() {}
}

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;

  constructor(public payload: UserGitHub[]) {}
}

export type ActionsUsers = AddUser | LoadUsers | EffectGetUsersAction;
