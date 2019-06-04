import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GitDataService {

  urlToLoginGithub;
  hostService = 'http://localhost:5000/';

  constructor(private http: HttpClient, private router: Router) {
    this.urlToLoginGithub = 'https://github.com/login/oauth/authorize?client_id=' + environment.client_id + '&scope=respo';
  }

  loginToGitHub() {
    window.location.href = this.urlToLoginGithub;
  }

  getUsers(name) {
    this.http.get(this.hostService + 'users/' + 'bruno').subscribe(
      (res: string) => console.log( JSON.parse(res))
    );
  }
}
