import {Component, Input, OnInit} from '@angular/core';
import {UserGitData} from '../../models/mockUserData';
import {UserGitHub} from '../../models/userGitHub';
import {GitDataService} from '../../services/git-data.service';
import {Observable} from 'rxjs';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  // theUsersData: UserGitHub[] = [];
  // private userObs: Promise<UserGitHub[]>;
  private userObs: UserGitHub[] = [];
  constructor(private shared: SharedService) { }

  ngOnInit() {
    this.shared.getUsersObserver().subscribe( ( res ) => this.userObs = res );
  }

  search(name: string) {
    // this.userObs = this.gService.getUsers(name);
    // this.gService.getUsers(name).then( ( res ) => this.userObs = res);
  }
}
