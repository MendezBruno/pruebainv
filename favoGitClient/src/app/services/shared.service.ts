import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserGitHub } from '../models/userGitHub';
import {UsersDataGitHub} from '../models/usersDataGitHub';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private observerUsers: BehaviorSubject<UserGitHub[]> = new BehaviorSubject<UserGitHub[]>([]);
  usersObservable$: Observable<UserGitHub[]> = this.observerUsers.asObservable();

  private observerFavorite: BehaviorSubject<UserGitHub[]> = new BehaviorSubject<UserGitHub[]>([]);
  favoriteObservable$: Observable<UserGitHub[]> = this.observerFavorite.asObservable();

  private observerFollowers: BehaviorSubject<UsersDataGitHub[]> = new BehaviorSubject<UsersDataGitHub[]>([]);
  followersObservable$: Observable<UsersDataGitHub[]> = this.observerFollowers.asObservable();

  constructor() { }

  getUsersObserver() {
    return this.usersObservable$;
  }

  usersNotify(usersNotify: UserGitHub[]) {
    this.observerUsers.next(usersNotify);
  }

  getFavoritesObserver() {
    return this.favoriteObservable$;
  }

  favoriteNotify(favoriteNotify: UserGitHub[]) {
    this.observerFavorite.next(favoriteNotify);
  }


  getFollowersObserver() {
    return this.followersObservable$;
  }

  followersNotify( followers: UsersDataGitHub[] ) {
    this.observerFollowers.next(followers);
  }
}
