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

@Injectable({
  providedIn: 'root'
})
export class GitDataService {

  urlToLoginGithub;
  hostService = 'http://localhost:5000/';
  gitHubUsersData: UsersDataGitHub[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.urlToLoginGithub = 'https://github.com/login/oauth/authorize?client_id=' + environment.client_id + '&scope=respo';
  }

  loginToGitHub() {
    window.location.href = this.urlToLoginGithub;
  }

  async getUsers(name): Promise<UserGitHub[]> {
    const result = ( await this.http.get<string>(this.hostService + 'users/' + name).pipe( map( res => JSON.parse(res)  ) ).toPromise() ) as ResponseUsersDataGitHub;
    let listRes: UserGitHub[] = [];
    result.items.forEach( async user => {
      let resp = (await this.getUser(user.login)) as UserGitHub;
      listRes.push(resp);
    });
    return listRes;
  }

  private async getUser(login: string): Promise<any> {
    return this.http.get<string>(this.hostService + 'user/' + login).pipe( map( res => JSON.parse(res)  ) ).toPromise();
  }
}
