import { Component, OnInit, Input } from '@angular/core';
import { UserGitHub } from '../../models/userGitHub';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-user-git-hub',
  templateUrl: './card-user-git-hub.component.html',
  styleUrls: ['./card-user-git-hub.component.css']
})
export class CardUserGitHubComponent implements OnInit {

  @Input() userData: UserGitHub;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProfile() {
    this.router.navigate(['/userProfile', { user: this.userData.login} ]);
  }

  addFavorite() {

  }
}
