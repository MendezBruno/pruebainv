import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GitDataService} from '../../services/git-data.service';
import {UserGitHub} from '../../models/userGitHub';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();
  // query: string;

  private userObs: UserGitHub[] = [];


  constructor(private gService: GitDataService, private shared: SharedService) { }

  ngOnInit() {
  }

  onEnterPress(name: any) {
    // this.searchQuery.emit(query);
    this.gService.getUsers(name).then( ( res: UserGitHub[]) => this.shared.usersNotify(res));
  }

  // findByUserName(name: string) {
  //   // this.userObs = this.gService.getUsers(name);
  //   this.gService.getUsers(name).then( ( res ) => this.userObs = res);
  // }
}
