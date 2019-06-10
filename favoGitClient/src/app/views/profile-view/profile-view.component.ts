import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserGitHub} from '../../models/userGitHub';
import {GitDataService} from '../../services/git-data.service';
import {Subscription} from 'rxjs';
import {ReposGitHub} from '../../models/reposGitHub';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit, OnDestroy {
  @ViewChild('modal') theModal: any;
  private user: UserGitHub = new UserGitHub();
  private favorites: UserGitHub[] = [];
  private subscripcionUser: Subscription;
  private subscripcionRepos: Subscription;
  private repos: ReposGitHub[] = [];
  private isFavorite: boolean;
  private subscripcionFavorites: Subscription;
  private subscripcionFollowers: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gService: GitDataService,
    private shared: SharedService) { }

  ngOnInit() {
     const user = this.route.snapshot.paramMap.get('user');
     this.subscripcionUser = this.gService.getLocal(user).subscribe( res => this.user = res );
     this.subscripcionFollowers = this.gService.getLocalfollowers(user).subscribe( res => this.shared.followersNotify(res) );
     this.subscripcionRepos = this.gService.getRespo(user).subscribe( res => this.repos = res );
     this.subscripcionFavorites = this.shared.getFavoritesObserver().subscribe( res => {
       this.favorites = res;
       this.isFavorite = !!(this.favorites.find( (favorite) =>  favorite.login === user));
     });

  }


  goToSearchView() {
    this.router.navigate(['/inicio']);
  }

  ngOnDestroy() {
    this.subscripcionUser.unsubscribe();
    this.subscripcionRepos.unsubscribe();
    this.subscripcionFavorites.unsubscribe();
  }

  goToGithubPerfil() {
    window.location.href = this.user.html_url;
  }

  goToRepo(repo) {
    window.location.href = repo.html_url;
  }

  addFavorite() {
    this.favorites.push(this.user);
    this.shared.favoriteNotify(this.favorites);
  }

  removeFavorite() {
    this.favorites.splice( this.favorites.indexOf(this.user), 1 );
    this.shared.favoriteNotify(this.favorites);
  }

  linkToBlog() {
    window.location.href = this.user.blog;
  }

  seeFollower() {
      this.theModal.toggleModal();
  }

  goBack() {
    this.router.navigate(['/inicio']);
  }
}
