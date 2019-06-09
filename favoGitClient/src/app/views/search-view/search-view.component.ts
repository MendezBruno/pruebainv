import {Component, Input, OnInit} from '@angular/core';
import {UserGitHub} from '../../models/userGitHub';
import {GitDataService} from '../../services/git-data.service';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  private userObs: UserGitHub[] = [];
  private sortFlag = true;
  private totalFinded = 0;
  private sortFunction: (a, b) => number;
  constructor(private shared: SharedService, private gServiceData: GitDataService) { }

  ngOnInit() {
    this.shared.getUsersObserver().subscribe( ( res ) => {
      this.userObs = res.length < 20 ? res : res.splice(0, 20);
      this.totalFinded = this.gServiceData.getTotalFinded();
    });
  }

  sort() {
    this.sortFunction = this.sortFlag ? this.desc : this.asc;
    this.sortFlag = !this.sortFlag;
    this.userObs = this.userObs.sort(this.sortFunction);
  }

  asc(a, b) {
      if (a.login < b.login ) {
        return -1;
      }
      if (a.login > b.login ) {
        return 1;
      }
      // a debe ser igual b
      return 0;

  }

  desc(a, b ) {
    if (a.login > b.login ) {
      return -1;
    }
    if (a.login < b.login ) {
      return 1;
    }
    // a debe ser igual b
    return 0;
  }


}
