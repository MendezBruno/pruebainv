import * as usersActions from '../actions/users.actions';
import { UsersState } from '../../app/app.states';
import { UserGitHub } from '../../app/models/userGitHub';

export const initialState:
  UsersState = {
  users: [],
  load: false,
  loading: false,
};

export function userReducer(state = initialState, action: usersActions.ActionsUsers): UsersState {
  switch (action.type) {

    case usersActions.ADD_PUBLICACION: {
      state.publicaciones.push(<UserGitHub>action.payload);
      return state;
    }

    case usersActions.LOAD_PUBLICATION: {
      console.log('load es', action.payload);
      return {
        ...state,
        users: action.payload,
        load: true
      };
    }

    default: {
      return state;
    }
  }
}
