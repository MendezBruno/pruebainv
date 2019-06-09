import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserGitHub} from '../../models/userGitHub';
import {GitDataService} from '../../services/git-data.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  private user: UserGitHub;

  constructor(private route: ActivatedRoute, private router: Router,  private gService: GitDataService) { }

  ngOnInit() {
     const user = this.route.snapshot.paramMap.get('user');
     this.gService.getLocal(user).subscribe( res => this.user = res );

  }


  goToSearchView() {
    this.router.navigate(['/search']);
  }
}
