import {Injectable} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {GitDataService} from '../../app/services/git-data.service';
import * as actionsUserGitHub from '../actions/users.actions';
import 'rxjs/add/observable/of';



@Injectable()
export class PublicacionEffects {

  @Effect()
  get_publicaciones$ = this.action$
    .ofType(actionsUserGitHub.GET_USER_ACTION).pipe(
      switchMap(() => this.gService.getUsers(name)),
      switchMap((users) => {
        console.log('users:', users);
        return Observable.of(new actionsUserGitHub.LoadUsers(users));
      })
    );



  constructor(private action$: Actions, private gService: GitDataService) { }
}
