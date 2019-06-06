import { Component, OnInit, Input } from '@angular/core';
import { UserGitHub } from '../../models/userGitHub';

@Component({
  selector: 'app-card-user-git-hub',
  templateUrl: './card-user-git-hub.component.html',
  styleUrls: ['./card-user-git-hub.component.css']
})
export class CardUserGitHubComponent implements OnInit {

  @Input() userData: UserGitHub;

  constructor() { }

  ngOnInit() {
  }

}
