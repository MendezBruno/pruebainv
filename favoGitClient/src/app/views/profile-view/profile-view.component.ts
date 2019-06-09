import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserGitHub} from '../../models/userGitHub';
import {GitDataService} from '../../services/git-data.service';
import {Subscription} from 'rxjs';
import {ReposGitHub} from '../../models/reposGitHub';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit, OnDestroy {
  private user: UserGitHub;
  private subscripcionUser: Subscription;
  private subscripcionRepos: Subscription
  private repos: ReposGitHub[];

  constructor(private route: ActivatedRoute, private router: Router,  private gService: GitDataService) { }

  ngOnInit() {
     const user = this.route.snapshot.paramMap.get('user');
     this.subscripcionUser = this.gService.getLocal(user).subscribe( res => this.user = res );
     this.subscripcionRepos = this.gService.getRespo(user).subscribe( res => this.repos = res );

  }


  goToSearchView() {
    this.router.navigate(['/search']);
  }

  ngOnDestroy() {
    this.subscripcionUser.unsubscribe();
    this.subscripcionRepos.unsubscribe();
  }

  goToGithubPerfil() {
    window.location.href = this.user.html_url;
  }
}
