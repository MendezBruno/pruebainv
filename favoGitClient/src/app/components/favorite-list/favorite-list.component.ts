import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {Subscription} from 'rxjs';
import {UserGitHub} from '../../models/userGitHub';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  private subscriptionFavorites: Subscription;
  private favorites: UserGitHub[];


  constructor(private shared: SharedService) { }

  ngOnInit() {
    this.subscriptionFavorites = this.shared.getFavoritesObserver().subscribe( res => this.favorites = res);
  }


  removeFavorite(user: UserGitHub) {
    this.favorites.splice( this.favorites.indexOf(user), 1 );
    this.shared.favoriteNotify(this.favorites);
  }
}
