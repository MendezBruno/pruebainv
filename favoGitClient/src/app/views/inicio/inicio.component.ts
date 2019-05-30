import { Component, OnInit } from '@angular/core';
import { GitDataService } from 'src/app/services/git-data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private githubService: GitDataService) { }

  ngOnInit() {
  }

  login() {
    this.githubService.loginToGitHub();
  }

}
