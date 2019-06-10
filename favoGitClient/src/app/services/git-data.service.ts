import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserGitHub} from '../models/userGitHub';
import {UsersDataGitHub} from '../models/usersDataGitHub';
import {async} from 'rxjs/internal/scheduler/async';
import {ResponseUsersDataGitHub} from '../models/responseUsersDataGitHub';
import { UserGitData } from '../models/mockUserData';

@Injectable({
  providedIn: 'root'
})
export class GitDataService {

  urlToLoginGithub;
  hostService = 'http://localhost:5000/';
  gitHubUsersData: UsersDataGitHub[] = [];
  private result: ResponseUsersDataGitHub;

  constructor(private http: HttpClient) {
    this.urlToLoginGithub = 'https://github.com/login/oauth/authorize?client_id=' + environment.client_id + '&scope=respo';
  }

  loginToGitHub() {
    window.location.href = this.urlToLoginGithub;
    // this.http.get(this.hostService + 'login').toPromise()
    //   .then( res => alert('Logueado' + res) )
    //   .catch( res => alert('Hubo un problema al loguear: ' + res + ' puede continuar pero los request son limitados') )
  }

  async getUsers(name): Promise<UserGitHub[]> {
    this.result = ( await this.http.get<string>(this.hostService + 'users/' + name).pipe( map( res => JSON.parse(res)  ) ).toPromise() ) as ResponseUsersDataGitHub;
    const listRes: UserGitHub[] = [];
    this.result.items.forEach( async user => {
      const resp = (await this.getUser(user.login)) as UserGitHub;
      listRes.push(resp);
    });
    return listRes;
  }

  private async getUser(login: string): Promise<any> {
    return this.http.get<string>(this.hostService + 'user/' + login).pipe( map( res => JSON.parse(res)  ) ).toPromise();
  }

  getTotalFinded(): number {
    return !!this.result ? this.result.total_count : 0;
  }

  getLocal(name: string): Observable<any> {
    return  this.http.get<string>(this.hostService + 'localuser/' + name).pipe( map( res => JSON.parse(res)  ) );
  }

  getRespo(name: string) {
    return  this.http.get<string>(this.hostService + 'repos/' + name).pipe( map( res => JSON.parse(res)  ) );
  }

  getLocalfollowers(user: string) {
    return  this.http.get<string>(this.hostService + 'followers/' + name).pipe( map( res => JSON.parse(res)  ) );
  }
}
