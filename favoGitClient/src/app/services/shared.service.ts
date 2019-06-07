import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserGitHub } from '../models/userGitHub';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private observerUsers: BehaviorSubject<UserGitHub[]> = new BehaviorSubject<UserGitHub[]>([]);
  usersObservable$: Observable<UserGitHub[]> = this.observerUsers.asObservable();

  private observerFavorite: BehaviorSubject<UserGitHub[]> = new BehaviorSubject<UserGitHub[]>([]);
  favoriteObservable$: Observable<UserGitHub[]> = this.observerUsers.asObservable();

  constructor() { }

  getUsersObserver() {
    return this.usersObservable$;
  }

  usersNotify(usersNotify: UserGitHub[]) {
    this.observerUsers.next(usersNotify);
  }

  getFavoritesObserver() {
    return this.observerFavorite;
  }

  favoriteNotify(favoriteNotify: UserGitHub[]) {
    this.observerFavorite.next(favoriteNotify);
  }



}
