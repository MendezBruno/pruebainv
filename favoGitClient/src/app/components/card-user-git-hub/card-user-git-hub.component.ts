import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { UserGitHub } from '../../models/userGitHub';
import { Router } from '@angular/router';
import {SharedService} from '../../services/shared.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-card-user-git-hub',
  templateUrl: './card-user-git-hub.component.html',
  styleUrls: ['./card-user-git-hub.component.css']
})
export class CardUserGitHubComponent implements OnInit, OnDestroy {

  @Input() userData: UserGitHub;
  private subscriptionFavorites: Subscription;
  private favorites: UserGitHub[];
  private isFavorite: boolean;

  constructor(private shared: SharedService, private router: Router) { }

  ngOnInit() {
    this.subscriptionFavorites = this.shared.getFavoritesObserver().subscribe( res => {
      this.favorites = res;
      this.isFavorite = !!(this.favorites.find( (favorite) =>  favorite.login === this.userData.login));
    });
  }

  goToProfile() {
    this.router.navigate(['/userProfile', { user: this.userData.login} ]);
  }

  addFavorite() {
      this.favorites.push(this.userData);
      this.shared.favoriteNotify(this.favorites);
  }

  ngOnDestroy() {
    this.subscriptionFavorites.unsubscribe();
  }

  removeFavorite() {
    this.favorites.splice( this.favorites.indexOf(this.userData), 1 );
    this.shared.favoriteNotify(this.favorites);
  }
}
