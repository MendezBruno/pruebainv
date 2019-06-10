import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {UserGitHub} from '../../models/userGitHub';
import {SharedService} from '../../services/shared.service';
import {UsersDataGitHub} from '../../models/usersDataGitHub';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.css']
})
export class FollowersListComponent implements OnInit {

  private subscriptionFollowers: Subscription;
  private followers: UsersDataGitHub[];


  constructor(private shared: SharedService) { }

  ngOnInit() {
    this.subscriptionFollowers = this.shared.getFollowersObserver().subscribe( res => this.followers = res);
  }





}
